//Nano: Importo de archivos propios
import store from "../index";
import { getMediaFromAPI } from "../object-builders/mediaCalls";
import { definedMediaFilter, mediaFilter } from "../object-builders/filters";

export const SET_MEDIA = "media/set";
export const CLEAR_FILTERED_MEDIA = "media/filtered/clear";
export const CLEAR_ALL_MEDIA = "media/all/clear";
export const FILTER_MEDIA = "media/filter";
export const SET_FILTER_BY_PLATFORM = "filter/platform/set";
export const SET_FILTER_BY_GENRE = "filter/genre/set";
export const SET_FILTER_BY_RATING = "filter/rating/set";
export const SET_ORDER_BY_YEAR = "order/year/set";
export const CLEAR_ALL_FILTERS = "clear/all/filters";

const api_key = process.env.APIKEY;

export function setFilterByPlatform(payload) {
  if (store.getState().filterReducer.filter.platforms.includes(payload)) {
    const platformsFilter = store
      .getState()
      .filterReducer.filter.platforms.filter(
        (platform) => platform !== payload
      );
    return {
      type: SET_FILTER_BY_PLATFORM,
      payload: platformsFilter,
    };
  }
  const platformsFilter = [
    ...store.getState().filterReducer.filter.platforms,
    payload,
  ];
  return {
    type: SET_FILTER_BY_PLATFORM,
    payload: platformsFilter,
  };
}

export function setFilterByGenre(payload) {
  return {
    type: SET_FILTER_BY_GENRE,
    payload: payload,
  };
}

export function setFilterByRating(payload) {
  return {
    type: SET_FILTER_BY_RATING,
    payload: payload,
  };
}

export function getMedia(caller, query) {
  return async (dispatch) => {
    let media = await getMediaFromAPI(caller, query);
    media = media.length ? definedMediaFilter(media) : ["No hay coincidencias"];
    dispatch({ type: SET_MEDIA, payload: media });
  };
}

export function clearFilteredMedia() {
  return {
    type: CLEAR_FILTERED_MEDIA,
    payload: [],
  };
}

export function clearAllMedia() {
  return {
    type: CLEAR_ALL_MEDIA,
    payload: [],
  };
}

export function setOrderByYear(payload) {
  return {
    type: SET_ORDER_BY_YEAR,
    payload: payload,
  };
}

function orderMediaByYear(mediaList, order) {
  if (order && order == "asc") {
    const media = mediaList.sort(
      (movieA, movieB) => movieA.release_year - movieB.release_year
    );
    return media;
  }
  if (order && order == "des") {
    const media = mediaList.sort(
      (movieA, movieB) => movieB.release_year - movieA.release_year
    );
    return media;
  }
  return mediaList;
}

export function clearAllFilters() {
  return {
    type: CLEAR_ALL_FILTERS,
    payload: {
      adults: false,
      min_release_year: null,
      max_release_year: null,
      vote_average: [],
      genres: [],
      platforms: [],
    },
  };
}

export function filterMedia() {
  let media = store.getState().mediaReducer.allMedia;
  const filter = store.getState().filterReducer.filter;
  media = media.length
    ? (media[0] !== "No hay coincidencias" &&
        mediaFilter(media, filter).length &&
        mediaFilter(media, filter)) || ["No hay coincidencias"]
    : [];
  media = orderMediaByYear(media, filter.year_order);
  return {
    type: FILTER_MEDIA,
    payload: media,
  };
}
