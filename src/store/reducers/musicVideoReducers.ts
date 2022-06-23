import {
  SET_GENRE_LIST,
  SET_MUSIC_VIDEO_LIST,
  SET_SELECTED_GENRE,
} from "../actions/actionTypes";

const initialState = {
  musicVideoList: [],
  genreList: [],
  selectedGenre: {},
};

function musicVideoReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_GENRE_LIST:
      return {...state, genreList: action.payload};
    case SET_MUSIC_VIDEO_LIST:
      return {...state, musicVideoList: action.payload};
    case SET_SELECTED_GENRE:
      return {...state, selectedGenre: action.payload};

    default:
      return state;
  }
}
export default musicVideoReducer;
