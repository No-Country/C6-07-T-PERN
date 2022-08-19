import store from "../index";

import { mediaBuilder } from "../object-builders/movies";
import { mediaFilter } from "../object-builders/filters";

export const SET_MEDIA = "media/set";
export const SET_FILTER_BY_PLATFORM = "filter/platform/set";
const api_key = process.env.APIKEY;

export function setFilterByPlatform(payload) {
  if (store.getState().filterReducer.filter.platforms.includes(payload)) {
    const platformsFilter = store
      .getState()
      .filterReducer.filter.platforms.filter(
        (platform) => platform !== payload
      );
    console.log("Incluides:", platformsFilter);
    return {
      type: SET_FILTER_BY_PLATFORM,
      payload: platformsFilter,
    };
  }

  const platformsFilter = [
    ...store.getState().filterReducer.filter.platforms,
    payload,
  ];
  console.log("Not Incluides:", platformsFilter);
  return {
    type: SET_FILTER_BY_PLATFORM,
    payload: platformsFilter,
  };
}

export function getMedia() {
  return async (dispatch) => {
    return fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=2`
    // `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&`
    )
      .then((r) => r.json())
      .then(async (response) => {
        const { results } = response;
        const filter = store.getState().filterReducer.filter;
        console.log(filter);
        const media = await Promise.all(
          results.map(async (result) => {
            return await mediaBuilder(result.id, "AR");
          })
        );
        return mediaFilter(media, filter);
      })
      .then((response) => {
        dispatch({ type: SET_MEDIA, payload: response });
      });
  };
}
