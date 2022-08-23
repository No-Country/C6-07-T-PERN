import { SET_FILTER_BY_PLATFORM } from "../actions";

const initialState = {
  filter: {
    adults: false,
    min_release_year: null,
    max_release_year: null,
    vote_average: [],
    genres: [],
    platforms: [],
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_BY_PLATFORM:
      return {
        filter: {
          ...state.filter,
          platforms: action.payload,
        },
      };
    default:
      return state;
  }
};
export default filterReducer;
