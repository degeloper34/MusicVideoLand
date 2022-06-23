import {Genre} from "../../../types";
import {GET_MUSIC_VIDEO, SET_SELECTED_GENRE} from "./actionTypes";

export const getMusicVideo = () => {
  return {
    type: GET_MUSIC_VIDEO,
  };
};

export const setSelectedGenre = (payload: Genre) => {
  return {
    type: SET_SELECTED_GENRE,
    payload,
  };
};
