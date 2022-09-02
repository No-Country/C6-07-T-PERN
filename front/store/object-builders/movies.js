import store from "..";

const api_key = process.env.APIKEY;

//Nano: Función para llamar la API de detalles
function getDetails(mediaId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}?api_key=${api_key}&language=es-LA`
  ).then((r) => r.json());
}

//Nano: Función para llamar la API de creditos
function getCredits(mediaId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/credits?api_key=${api_key}&language=es-LA`
  ).then((r) => r.json());
}

//Nano: Función para llamar la API de títulos y retornar el titulo alternativo
async function getTitles(mediaId) {
  const alternativeTitleResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/alternative_titles?api_key=${api_key}`
  ).then((r) => r.json());
  const translationsResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/translations?api_key=${api_key}`
  ).then((r) => r.json());

  const alternativeTitleObject =
    alternativeTitleResponse.titles &&
    (alternativeTitleResponse.titles.find(
      (element) => element.iso_3166_1 === "ES"
    ) ||
      alternativeTitleResponse.titles.find(
        (element) => element.iso_3166_1 === "US"
      ));
  const alternativeTitle =
    alternativeTitleObject && alternativeTitleObject.title;

  const translatedTitleObjectES =
    translationsResponse.translations &&
    translationsResponse.translations.find((element) => {
      return element.name === "Español";
    });

  const translatedTitleObjectEN =
    translationsResponse.translations &&
    translationsResponse.translations.find((element) => {
      return element.name === "English";
    });
  const translatedTitle =
    (translatedTitleObjectES && translatedTitleObjectES.data.title) ||
    (translatedTitleObjectEN && translatedTitleObjectEN.data.title);

  return alternativeTitle && alternativeTitle.includes(":")
    ? alternativeTitle
    : translatedTitle || alternativeTitle || null;
}

//Nano: Función para llamar la API de plataformas
function getPlatforms(mediaId, country) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/watch/providers?api_key=${api_key}`
  ).then(async (r) => {
    let result = await r.json();
    let platforms = [];
    if (result.results && result.results[country]) {
      result = result.results[country];
      if (result.buy) platforms = platforms.concat(result.buy);
      if (result.rent) platforms = platforms.concat(result.rent);
      if (result.flatrate) platforms = platforms.concat(result.flatrate);
    }
    return platforms;
  });
}

//Nano: Función para llamar la API de trailers
function getTrailer(mediaId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/videos?api_key=${api_key}&language=es-LA`
  ).then(async (r) => {
    const result = await r.json();
    return result.results ? result.results[0] && result.results[0].key : null;
  });
}

//Nano: Función para construir el objeto media con la información necesaria para nuestro filtros
export async function movieBuilder(mediaId, lists, country) {
  //Nano: Extraigo las listas
  const thisMediaLists = lists.find(
    (media) =>
      media.media.mediaId == mediaId && media.media.mediaType == "movie"
  );

  //Nano: Hago la llamada a la API de detalles
  const details = await getDetails(mediaId);
  if (details.id) {
    //Nano: Si la llamada a detalles funciona, hago la llamada al resto de los endpoints
    const crew = await getCredits(mediaId);
    const platforms = await getPlatforms(mediaId, country);
    const trailer = await getTrailer(mediaId);
    const translatedTitle = await getTitles(mediaId);
    // console.log(details.original_language, details.title, translatedTitle);
    //Nano: Validación de titulos en indiomas con caracterés diferentes
    const title = !(
      details.original_language == "ko" ||
      details.original_language == "ch" ||
      details.original_language == "ja" ||
      details.original_language == "ru" ||
      details.original_language == "hi" ||
      details.original_language == "th" ||
      details.original_language == "cn" ||
      details.original_language == "vi"
    )
      ? details.title
      : translatedTitle || details.title;

    const getDirector = () => {
      if (crew.crew) {
        const directorObject = crew.crew.find(
          (element) => element.job == "Director"
        );
        return directorObject ? directorObject.name : "No disponible";
      }
    };
    const getCast = () => {
      if (crew.cast) {
        const casting =
          crew.cast && crew.cast.filter((actor) => actor.popularity >= 5);
        return casting.length ? casting : [{ id: null, name: "No disponible" }];
      }
    };

    //Nano: Construyo el objeto con la informacion necesaria
    const media = {
      id: details.id,
      adults: details.adult,
      title: title,
      overview: details.overview || "No disponible",
      release_date: details.release_date,
      // release_year: mediaId,
      release_year: details.release_date
        ? details.release_date.slice(0, 4)
        : "N/D",
      vote_average: details.vote_average
        ? Math.floor(details.vote_average * 10) / 10
        : "N/D",
      genres: details.genres,
      image: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
      actors: getCast(),
      director: getDirector(),
      platforms: platforms.map((platform) => ({
        id: platform.provider_id,
        name: platform.provider_name,
        logo: `https://image.tmdb.org/t/p/w500/${platform.logo_path}`,
      })),
      trailer: `${trailer}`,
      type: "movie",
      watched: thisMediaLists && thisMediaLists.watched,
      my_list: thisMediaLists && thisMediaLists.my_list,
    };
    return media;
  }
  return undefined;
}
// //Nano: Función para hacer llamado a API y traer los elementos
// export async function getMovies() {
//   // `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&`
//   const baseURL = (page) =>
//     `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${page}`;
//   const apiCall = async (baseURL) => await fetch(baseURL).then((r) => r.json());
//   const apiResponse = await apiCall(baseURL(1));
//   const { results, total_pages: pages } = apiResponse;
//   const allResults = [...results];
//   for (let i = 2; i <= 5 && i < pages; i++) {
//     const apiResponse = await apiCall(baseURL(i));
//     const { results } = apiResponse;
//     allResults.push(...results);
//   }

//   const allResultsNoDuplicated = allResults.filter(
//     (element, index, self) =>
//       self.findIndex((element2) => element2.id === element.id) === index
//   );

//   const movies = await Promise.all(
//     allResultsNoDuplicated.map(async (result) => {
//       return await movieBuilder(result.id, "AR");
//     })
//   );
//   return movies;
// }
