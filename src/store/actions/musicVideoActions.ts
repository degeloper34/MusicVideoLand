import {Genre} from "../../../types";
import {GET_MUSIC_VIDEO, SET_SELECTED_GENRE_ID} from "./actionTypes";

export const getMusicVideo = () => {
  return {
    type: GET_MUSIC_VIDEO,
  };
};
