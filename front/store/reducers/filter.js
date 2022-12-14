import {
  CLEAR_ALL_FILTERS,
  SET_FILTER_BY_GENRE,
  SET_FILTER_BY_PLATFORM,
  SET_FILTER_BY_RATING,
  SET_ORDER_BY_YEAR,
} from "../actions";

const initialState = {
  filter: {
    adults: false,
    year_order: "des", //asc or des
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
    case SET_FILTER_BY_GENRE:
      return {
        filter: {
          ...state.filter,
          genres: action.payload,
        },
      };
    case SET_FILTER_BY_RATING:
      return {
        filter: {
          ...state.filter,
          vote_average: action.payload,
        },
      };
    case SET_ORDER_BY_YEAR:
      return {
        filter: {
          ...state.filter,
          year_order: action.payload,
        },
      };
    case CLEAR_ALL_FILTERS:
      return {
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
export default filterReducer;
