import {all} from "redux-saga/effects";

import {musicVideoWatcher} from "./musicVideoSagas";

export default function* rootSaga() {
  yield all([musicVideoWatcher()]);
}
