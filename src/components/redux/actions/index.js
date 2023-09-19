import { type } from "@testing-library/user-event/dist/type";

export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_TO_FAVORITE = "REMOVE_TO_FAVORITE";
export const FETCH_JOBS = "FETCH_JOBS";
export const FETCH_JOBS_LOADING_ON = "FETCH_JOBS_LOADING_ON";
export const FETCH_JOBS_LOADING_OFF = "FETCH_JOBS_LOADING_OFF";
export const FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR";

export const addToFavoriteAction = data => ({ type: ADD_TO_FAVORITE, payload: data });
export const removeToFavoriteAction = i => ({ type: REMOVE_TO_FAVORITE, payload: i });

export const fetchJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCH_JOBS_LOADING_ON });

      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: FETCH_JOBS, payload: data });
        dispatch({ type: FETCH_JOBS_LOADING_OFF });
      } else {
        alert("Error fetching results");
        dispatch({ type: FETCH_JOBS_ERROR, payload: "Errore i dati non sono stati reperiti con successo" });
        dispatch({ type: FETCH_JOBS_LOADING_OFF });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_JOBS_LOADING_OFF });
    } finally {
      dispatch({ type: FETCH_JOBS_LOADING_OFF });
    }
  };
};
