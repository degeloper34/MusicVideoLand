import {SET_GET_MUSIC_VIDEO_RESPONSE} from "../actions/actionTypes";

const initialState = {
  musicVideoList: [],
  genreList: [],
};

function musicVideoReducer(state = initialState, action: any) {
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
