import { ADD_TO_FAVORITE } from "../actions";

const iState = {
  content: [],
};

const favoriteReducer = (state = iState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case "REMOVE_TO_FAVORITE":
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};
export default favoriteReducer;
