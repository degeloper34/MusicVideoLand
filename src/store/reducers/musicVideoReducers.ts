import {GenreList, MusicVideoList} from "../../../types";
import {SET_GET_MUSIC_VIDEO_RESPONSE} from "../actions/actionTypes";

const initialState: {
  musicVideoList: MusicVideoList;
  genreList: GenreList;
} = {
  musicVideoList: [],
  genreList: [],
};

interface ActionSetGetMusicVideoResponse {
  type: "SET_GET_MUSIC_VIDEO_RESPONSE";
  payload: {
    musicVideoList: MusicVideoList;
    genreList: GenreList;
  };
}

type Actions = ActionSetGetMusicVideoResponse;

function musicVideoReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case SET_GET_MUSIC_VIDEO_RESPONSE:
      return {
        ...state,
        musicVideoList: action.payload.musicVideoList,
        genreList: action.payload.genreList,
      };

    default:
      return state;
  }
}
export default musicVideoReducer;
