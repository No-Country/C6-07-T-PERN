import {
  getDirectorFromCredits,
  getMediaCredits,
  getMediaDetails,
  getMediaOverview,
  getMediaPlatforms,
  getMediaTrailer,
  getMovieTitle,
  getPopularCastFromCredits,
} from "./mediaInfoGet";

//Nano: Función para construir el objeto media con la información necesaria para nuestro filtros
export async function mediaBuilder(media, lists) {
  const details = await getMediaDetails(media.id, media.media_type);
  const credits = await getMediaCredits(media.id, media.media_type);
  const release_date =
    media.media_type === "movie" ? media.release_date : media.first_air_date;

  // Nano: Extraigo las listas
  const thisMediaLists =
    lists.length > 0
      ? lists.find(
          (media) =>
            media.media.mediaId == media.id &&
            media.media.media.media_type == media.media_type
        )
      : null;

  //Nano: Construyo el objeto resultante que exportaré
  const mediaBuilt = {
    id: media.id,
    adults: media.adult,
    title:
      media.media_type === "tv"
        ? media.name
        : (await getMovieTitle(media.id)) || media.title,
    overview:
      details.overview ||
      (await getMediaOverview(media.id, media.media_type)) ||
      "No disponible",
    release_date: release_date,
    release_year: release_date ? release_date.slice(0, 4) : "N/D",
    vote_average: media.vote_average ? Math.floor(media.vote_average * 10) / 10 : "N/D",
    genres: details.genres,
    image: `https://image.tmdb.org/t/p/w500/${media.poster_path}`,
    actors: await getPopularCastFromCredits(credits),
    director: await getDirectorFromCredits(credits),
    platforms: await getMediaPlatforms(media.id, media.media_type, "AR"),
    trailer: await getMediaTrailer(media.id, media.media_type),
    type: media.media_type,
    watched: thisMediaLists && thisMediaLists.watched,
    my_list: thisMediaLists && thisMediaLists.my_list,
  };

  return mediaBuilt;
}
