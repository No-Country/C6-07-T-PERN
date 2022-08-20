import { SET_MEDIA } from "../actions";
import { CLEAR_MEDIA } from "../actions";

const initialState = {
  media: [],
};

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEDIA:
      return {
        media: action.payload,
      };
    case CLEAR_MEDIA:
      return {
        media: action.payload,
      };
    default:
      return state;
  }
};
export default mediaReducer;
