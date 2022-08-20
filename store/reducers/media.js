import { SET_MEDIA, CLEAR_MEDIA, FILTER_MEDIA } from "../actions";

const initialState = {
  allMedia: [],
  filteredMedia: [],
};

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEDIA:
      return { ...state, allMedia: action.payload };
    case CLEAR_MEDIA:
      return { ...state, filteredMedia: action.payload };
    case FILTER_MEDIA:
      return { ...state, filteredMedia: action.payload };
    default:
      return state;
  }
};
export default mediaReducer;
