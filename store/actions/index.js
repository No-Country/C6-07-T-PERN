export const SET_MEDIA = "media/set";
const api_key = process.env.APIKEY;

async function mediaBuilder(mediaId, country) {
  const details = await fetch(
    //Nano: Hago la llamada a la API de detalles
    `https://api.themoviedb.org/3/movie/${mediaId}?api_key=${api_key}&language=es-LA`
  ).then((r) => r.json());

  //Nano: Hago la llamada a la API de creaditos
  const crew = await fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/credits?api_key=${api_key}&language=es-LA`
  ).then((r) => r.json());

  //Nano: Hago la llamada a la API de plataformas
  const platforms = await fetch(
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

  // Nano: Hago la llamada a la API de plataformas
  const trailer = await fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/videos?api_key=${api_key}&language=es-LA`
  ).then(async (r) => {
    const result = await r.json();
    return result.results ? result.results[0] && result.results[0].key : null;
  });

  //Nano: Construyo el objeto con la informacion necearia
  if (details) {
    const media = {
      id: details.id,
      title: details.original_title,
      overview: details.overview,
      release_date: details.release_date,
      // release_year: details.release_date.splice(0, 4),
      vote_average: details.vote_average,
      genres: details.genres,
      image: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
      actors: crew.cast && crew.cast.filter((actor) => actor.popularity >= 5),
      director:
        crew.crew &&
        crew.crew.find((element) => element.job == "Director").name,
      platforms: platforms.map((platform) => ({
        id: platform.provider_id,
        name: platform.provider_name,
      })),
      trailer: `https://www.youtube.com/watch?v=${trailer}`,
      // type,
    };
    // console.log("Detail: ", details.release_date.toString().splice(0, 4));
    return media;
  }
  return undefined;
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
          results.map(async (result, index) => {
            // if (index == 0)
            return await mediaBuilder(result.id, "AR");
          })
        );
        return media.filter((element) => element.id);
      })
      .then((response) => {
        console.log("Media:", response);
        dispatch({ type: SET_MEDIA, payload: response });
      });
  };
}
