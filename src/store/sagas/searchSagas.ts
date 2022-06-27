import {call, put, takeLatest} from "redux-saga/effects";
import {
  GET_MUSIC_VIDEO,
  SET_GET_MUSIC_VIDEO_RESPONSE,
} from "../actions/actionTypes";
import {getMusicVideos} from "../../api/requestApi";
import {GetMusicVideoResponseModel} from "../../../types";
import {groupBy} from "lodash";

function* testtt() {
  try {
  } catch (err) {}
}

export function* searchWatcher() {
  yield takeLatest(GET_MUSIC_VIDEO, testtt);
}
