import {
  SET_GET_MUSIC_VIDEO_RESPONSE,
  SET_SELECTED_GENRE_ID,
} from "../actions/actionTypes";

const initialState = {
  musicVideoList: [],
  genreList: [],
  selectedGenreId: -1,
  videoList: [],
};

function musicVideoReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_GET_MUSIC_VIDEO_RESPONSE:
      return {
        ...state,
        genreList: action.payload.genreList,
        musicVideoList: action.payload.musicVideoList,
        videoList: action.payload.videoList,
      };
    case SET_SELECTED_GENRE_ID:
      return {...state, selectedGenreId: action.payload};

    default:
      return state;
  }
}
export default musicVideoReducer;
