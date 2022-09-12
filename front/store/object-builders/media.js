import {
  getDirectorFromCredits,
  getMediaCredits,
  getMediaDetails,
  getMediaPlatforms,
  getMediaTrailer,
  getMovieTitle,
  getPopularCastFromCredits,
} from "./mediaInfoGet";

const api_key = process.env.APIKEY;

//Nano: Función para construir el objeto media con la información necesaria para nuestro filtros
export async function mediaBuilder(mediaId, mediaType, lists) {
  const details = await getMediaDetails(mediaId, mediaType);
  const credits = await getMediaCredits(mediaId, mediaType);
  const release_date =
    mediaType === "movie" ? details.release_date : details.first_air_date;

  // Nano: Extraigo las listas
  const thisMediaLists =
    lists.length > 0
      ? lists.find(
          (media) =>
            media.media.mediaId == mediaId && media.media.mediaType == mediaType
        )
      : null;

  // //   Nano: Validación de titulos en indiomas con caracterés diferentes
  // const title = !(
  //   details.original_language == "ko" ||
  //   details.original_language == "ch" ||
  //   details.original_language == "ja" ||
  //   details.original_language == "ru" ||
  //   details.original_language == "hi" ||
  //   details.original_language == "th" ||
  //   details.original_language == "cn" ||
  //   details.original_language == "vi"
  // )
  //   ? details.title
  //   : translatedTitle || details.title;

  //Nano: Construyo el objeto resultante que exportaré
  const media = {
    id: details.id,
    adults: details.adult,
    title: mediaType === "serie" ? details.name : await getMovieTitle(mediaId) || details.title,
    overview: details.overview || "No disponible",
    release_date: release_date,
    release_year: release_date ? release_date.slice(0, 4) : "N/D",
    vote_average: details.vote_average
      ? Math.floor(details.vote_average * 10) / 10
      : "N/D",
    genres: details.genres,
    image: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
    actors: await getPopularCastFromCredits(credits),
    director: await getDirectorFromCredits(credits),
    platforms: await getMediaPlatforms(mediaId, mediaType, "AR"),
    trailer: await getMediaTrailer(mediaId, mediaType),
    type: mediaType,
    watched: thisMediaLists && thisMediaLists.watched,
    my_list: thisMediaLists && thisMediaLists.my_list,
  };

  return media;
}
