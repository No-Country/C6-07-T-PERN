//Nano: Importo de archivos propios
import store from "../index";
import { getMediaFromAPI } from "../object-builders/mediaCalls";
import { definedMediaFilter, mediaFilter } from "../object-builders/filters";

export const SET_MEDIA = "media/set";
export const CLEAR_MEDIA = "media/clear";
export const FILTER_MEDIA = "media/filter";
export const SET_FILTER_BY_PLATFORM = "filter/platform/set";

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

export function getMedia(caller, query) {
  return async (dispatch) => {
    let media = await getMediaFromAPI(caller, query);
    media = media.length ? definedMediaFilter(media) : ["No hay coincidencias"];
    dispatch({ type: SET_MEDIA, payload: media });
  };
}

export function clearMedia() {
  return {
    type: CLEAR_MEDIA,
    payload: [],
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
  return {
    type: FILTER_MEDIA,
    payload: media,
  };
}
