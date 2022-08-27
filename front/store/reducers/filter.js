import { SET_FILTER_BY_GENRE, SET_FILTER_BY_PLATFORM, SET_FILTER_BY_RATING } from "../actions";

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
    default:
      return state;
  }
};
export default filterReducer;
