import {GenreList, MusicVideoList} from "../../../types";
import {SET_GET_MUSIC_VIDEO_RESPONSE} from "../actions/actionTypes";

const initialState: {
  musicVideoList: MusicVideoList;
  genreList: GenreList;
  loading: boolean;
} = {
  musicVideoList: [],
  genreList: [],
  loading: true,
};

function musicVideoReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_GET_MUSIC_VIDEO_RESPONSE:
      return {
        ...state,
        musicVideoList: action.payload.musicVideoList,
        genreList: action.payload.genreList,
        loading: action.payload.loading,
      };

    default:
      return state;
  }
}
export default musicVideoReducer;
