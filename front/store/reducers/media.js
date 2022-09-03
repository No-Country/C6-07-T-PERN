import {
  SET_MEDIA,
  CLEAR_FILTERED_MEDIA,
  CLEAR_ALL_MEDIA,
  FILTER_MEDIA,
  SET_ORDER_BY_YEAR,
} from "../actions";

const initialState = {
  allMedia: [],
  filteredMedia: [],
};

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEDIA:
      return { ...state, allMedia: action.payload };
    case CLEAR_FILTERED_MEDIA:
      return { ...state, filteredMedia: action.payload };
    case CLEAR_ALL_MEDIA:
      return { ...state, allMedia: action.payload };
    case FILTER_MEDIA:
      return { ...state, filteredMedia: action.payload };
    default:
      return state;
  }
};
export default mediaReducer;
