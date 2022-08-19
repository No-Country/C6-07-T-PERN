export const SET_MEDIA = "media/set";
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
function getTitles(mediaId, country) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/alternative_titles?api_key=${api_key}`
  )
    .then((r) => r.json())
    .then((response) => {
      const title =
        response.titles &&
        response.titles.find(
          (element) =>
            element.iso_3166_1 === country || element.iso_3166_1 === "ES"
        );
      return title ? title.title : null;
    });
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
async function mediaBuilder(mediaId, country) {
  //Nano: Hago la llamada a la API de detalles
  const details = await getDetails(mediaId);
  if (details.id) {
    //Nano: Si la llamada a detalles funciona, hago la llamada al resto de los endpoints
    const crew = await getCredits(mediaId);
    const alternativeTitle = await getTitles(mediaId, country);
    const platforms = await getPlatforms(mediaId, country);
    const trailer = await getTrailer(mediaId);

    //Nano: Construyo el objeto con la informacion necesaria
    const media = {
      id: details.id,
      adults: details.adult,
      title: alternativeTitle || details.original_title,
      overview: details.overview,
      release_date: details.release_date,
      release_year: details.release_date
        ? details.release_date.slice(0, 4)
        : null,
      vote_average: details.vote_average
        ? Math.floor(details.vote_average * 10) / 10
        : null,
      genres: details.genres,
      image: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
      actors: crew.cast && crew.cast.filter((actor) => actor.popularity >= 5),
      director:
        crew.crew &&
        crew.crew.find((element) => element.job == "Director").name,
      platforms: platforms.map((platform) => ({
        id: platform.provider_id,
        name: platform.provider_name,
        logo: `https://image.tmdb.org/t/p/w500/${platform.logo_path}`,
      })),
      trailer: `https://www.youtube.com/watch?v=${trailer}`,
      // type,
    };
    return media;
  }
  return undefined;
}

function mediaFilter(media) {
  let filter = {
    //adults: false,
    // min_release_year: 2020,
    // max_release_year: 2022,
    // vote_average: [5, 8],
    //genres: ["Acción", "Terror"],
   // platforms: ["Netflix", "Disney Plus"],
  };
  return media.filter((element) => {
    if (element) {
      const adultFilter = filter.adults
        ? element.adults === filter.adults
        : true;
      const min_release_yearFilter = filter.min_release_year
        ? element.release_year >= filter.min_release_year
        : true;
      const max_release_yearFilter = filter.max_release_year
        ? element.release_year <= filter.max_release_year
        : true;
      const vote_averageFilter = filter.vote_average
        ? filter.vote_average.includes(Math.round(element.vote_average))
        : true;
      const genresFilter = filter.genres
        ? element.genres
            .map((genre) => filter.genres.includes(genre.name))
            .includes(true)
        : true;
      const platformsFilter = filter.platforms
        ? element.platforms
            .map((platform) => filter.platforms.includes(platform.name))
            .includes(true)
        : true;

      if (Object.keys(filter).length) {
        if (
          adultFilter &&
          min_release_yearFilter &&
          max_release_yearFilter &&
          vote_averageFilter &&
          genresFilter &&
          platformsFilter
        ) {
          return element;
        }
      } else {
        return element;
      }
    }
  });
}

export function getMedia() {
  return async (dispatch) => {
    return fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
    )
      .then((r) => r.json())
      .then(async (response) => {
        const { results } = response;
        const media = await Promise.all(
          results.map(async (result) => {
            return await mediaBuilder(result.id, "AR");
          })
        );
        return mediaFilter(media);
      })
      .then((response) => {
        dispatch({ type: SET_MEDIA, payload: response });
      });
  };
}
