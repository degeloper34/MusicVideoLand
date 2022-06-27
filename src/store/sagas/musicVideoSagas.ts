import {call, put, takeLatest} from "redux-saga/effects";
import {
  GET_MUSIC_VIDEO,
  SET_GET_MUSIC_VIDEO_RESPONSE,
} from "../actions/actionTypes";
import {getMusicVideos} from "../../api/requestApi";
import {GetMusicVideoResponseModel} from "../../../types";
import {errorHandler} from "../../api/errorHandler";

function* getMusicVideo() {
  try {
    const response: GetMusicVideoResponseModel = yield call(getMusicVideos);

    yield put({
      type: SET_GET_MUSIC_VIDEO_RESPONSE,
      payload: {
        genreList: response?.genres,
        musicVideoList: response?.videos,
      },
    });
  } catch (err: any) {
    errorHandler(err, "Error while fetching music videos");
  }
}

export function* musicVideoWatcher() {
  yield takeLatest(GET_MUSIC_VIDEO, getMusicVideo);
}
