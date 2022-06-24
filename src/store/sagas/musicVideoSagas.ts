import {call, put, takeLatest} from "redux-saga/effects";
import {
  GET_MUSIC_VIDEO,
  SET_GET_MUSIC_VIDEO_RESPONSE,
} from "../actions/actionTypes";
import {getMusicVideos} from "../../api/requestApi";
import {GetMusicVideoResponseModel} from "../../../types";
import {groupBy} from "lodash";

function* getMusicVideo() {
  try {
    const response: GetMusicVideoResponseModel = yield call(getMusicVideos);

    const musicVideoListGroupByGenreId = groupBy(response?.videos, "genre_id");

    yield put({
      type: SET_GET_MUSIC_VIDEO_RESPONSE,
      payload: {
        musicVideoList: musicVideoListGroupByGenreId,
        genreList: response?.genres,
        videoList: response?.videos,
      },
    });
  } catch (err) {}
}

export function* musicVideoWatcher() {
  yield takeLatest(GET_MUSIC_VIDEO, getMusicVideo);
}
