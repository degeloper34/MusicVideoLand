import {
  SET_GENRE_LIST,
  SET_MUSIC_VIDEO_LIST,
  SET_SELECTED_GENRE_ID,
  SET_VIDEO_LIST,
} from "../actions/actionTypes";

const initialState = {
  musicVideoList: [],
  genreList: [],
  selectedGenreId: -1,
  videoList: [],
};

function musicVideoReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_GENRE_LIST:
      return {...state, genreList: action.payload};
    case SET_MUSIC_VIDEO_LIST:
      return {...state, musicVideoList: action.payload};
    case SET_SELECTED_GENRE_ID:
      return {...state, selectedGenreId: action.payload};
    case SET_VIDEO_LIST:
      return {...state, videoList: action.payload};

    default:
      return state;
  }
}
export default musicVideoReducer;
