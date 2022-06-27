import {Genre} from "../../../types";
import {GET_MUSIC_VIDEO, SET_SELECTED_GENRE_ID} from "./actionTypes";

export const setSelectedGenreId = (payload: number) => {
  return {
    type: SET_SELECTED_GENRE_ID,
    payload,
  };
};
