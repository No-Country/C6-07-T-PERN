const api_key = process.env.APIKEY;

//Nano: Función para llamar la API de detalles
export function getMediaDetails(mediaId, mediaType) {
  return fetch(
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${api_key}&language=es-LA`
  ).then((r) => r.json());
}

export function getMediaOverview(mediaId, mediaType) {
  return fetch(
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}/translations?api_key=${api_key}`
  )
    .then((r) => r.json())
    .then((r) => {
      if (!r.translations) return null;
      const translation = r.translations.find((language) => language.iso_639_1 == "es");
      return translation ? translation.data.overview : null;
    });
}

//Nano: Función para llamar la API de creditos
export function getMediaCredits(mediaId, mediaType) {
  return fetch(
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${api_key}&language=es-LA`
  ).then((r) => r.json());
}

export function getDirectorFromCredits(credits) {
  if (credits.crew) {
    const directorObject = credits.crew.find((element) => element.job == "Director");
    return directorObject ? directorObject.name : "No disponible";
  }
}

export function getPopularCastFromCredits(credits) {
  if (credits.cast) {
    const casting = credits.cast && credits.cast.filter((actor) => actor.popularity >= 5);
    return casting.length ? casting : [{ id: null, name: "No disponible" }];
  }
}

//Nano: Función para llamar la API de plataformas
export function getMediaPlatforms(mediaId, mediaType, country) {
  return fetch(
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}/watch/providers?api_key=${api_key}`
  ).then(async (r) => {
    let result = await r.json();
    let platforms = [];
    if (result.results && result.results[country]) {
      result = result.results[country];
      if (result.buy) platforms = platforms.concat(result.buy);
      if (result.rent) platforms = platforms.concat(result.rent);
      if (result.flatrate) platforms = platforms.concat(result.flatrate);
    }
    return platforms.map((platform) => ({
      id: platform.provider_id,
      name: platform.provider_name,
      logo: `https://image.tmdb.org/t/p/w500/${platform.logo_path}`,
    }));
  });
}

//Nano: Función para llamar la API de trailers
export async function getMediaTrailer(mediaId, mediaType) {
  const trailerES = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}/videos?api_key=${api_key}&language=es-LA`
  ).then(async (r) => await r.json());

  if (trailerES.results && trailerES.results[0] && trailerES.results[0].key)
    return trailerES.results[0].key;

  const trailerUS = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}/videos?api_key=${api_key}&language=en-US`
  ).then(async (r) => await r.json());
  return (trailerUS.results && trailerUS.results[0] && trailerUS.results[0].key) || null;
}

export async function getMovieTitle(mediaId) {
  const movieTitles = await fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/alternative_titles?api_key=${api_key}`
  ).then((r) => r.json());
  const movieTitleES = selectMovieAlternativeTitle(movieTitles, "ES");
  if (movieTitleES) return movieTitleES;

  const movieTranslations = await fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/translations?api_key=${api_key}`
  ).then((r) => r.json());
  const movieTranlationES = selectMovieTraducedTitle(movieTranslations, "ES");
  if (movieTranlationES) return movieTranlationES;

  const movieTitleUS = selectMovieAlternativeTitle(movieTitles, "US");
  if (movieTitleUS) return movieTitleUS;

  const movieTranlationEN = selectMovieTraducedTitle(movieTranslations, "EN");
  if (movieTranlationEN) return movieTranlationEN;
}

//Nano: Función para llamar la API de títulos alternativos y retornar el titulo alternativo
function selectMovieAlternativeTitle(movieTitles, language) {
  //Nano: Obtiene todos los titulos alternativos
  if (movieTitles.titles) {
    //Nano: Filtra los titulos alternativos para el idoma seleccionado
    const titles = movieTitles.titles.filter(
      (element) => element.iso_3166_1 === language
    );
    //Nano: Elige el título más largo en ese idioma
    const title =
      titles.length && Array.isArray(titles) > 1
        ? titles.reduce((acc, val) => {
            return acc.title.length > val.title.length ? acc.title : val.title;
          })
        : titles.length === 1
        ? titles[0].title
        : null;
    return title;
  }
}

//Nano: Función para obtener el título traducido
function selectMovieTraducedTitle(movieTranslations, language) {
  if (movieTranslations.translations) {
    //Nano: Filtra los titulos alternativos para el idoma seleccionado
    const translation = movieTranslations.translations.find(
      (element) => element.iso_3166_1 === language
    );
    if (translation) return translation.data.title;
  }
}
