import {call, put, takeLatest, all} from "redux-saga/effects";
import {
  GET_MUSIC_VIDEO,
  SET_GENRE_LIST,
  SET_MUSIC_VIDEO_LIST,
} from "../actions/actionTypes";
import {getMusicVideos} from "../../api/requestApi";
import {GetMusicVideoResponseModel} from "../../../types";

function* getMusicVideo() {
  try {
    const response: GetMusicVideoResponseModel = yield call(getMusicVideos);

    yield all([
      put({
        type: SET_MUSIC_VIDEO_LIST,
        payload: response.videos,
      }),
      put({
        type: SET_GENRE_LIST,
        payload: response.genres,
      }),
    ]);
  } catch (err) {}
}

export function* musicVideoWatcher() {
  yield takeLatest(GET_MUSIC_VIDEO, getMusicVideo);
}