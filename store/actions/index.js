import store from "../index";

import { getMovies } from "../object-builders/movies";
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

export function getMedia() {
  return async (dispatch) => {
    const movies = await getMovies();
    let media = [...movies];
    media = definedMediaFilter(media);
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
  const movies = store.getState().mediaReducer.allMedia;
  const filter = store.getState().filterReducer.filter;
  let media = [...movies];
  media = mediaFilter(media, filter);
  return {
    type: FILTER_MEDIA,
    payload: media,
  };
}
