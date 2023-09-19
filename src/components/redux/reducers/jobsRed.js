import { FETCH_JOBS, FETCH_JOBS_ERROR, FETCH_JOBS_LOADING_OFF, FETCH_JOBS_LOADING_ON } from "../actions";

const iState = {
  content: [],
  isLoading: false,
  hasError: false,
  errorMessage: "",
};

const JobsReducer = (state = iState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    case FETCH_JOBS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_JOBS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_JOBS_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default JobsReducer;
