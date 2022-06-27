import {SET_SELECTED_GENRE_ID} from "./actionTypes";

export const setSelectedGenreId = (payload: number) => {
  return {
    type: SET_SELECTED_GENRE_ID,
    payload,
  };
};
