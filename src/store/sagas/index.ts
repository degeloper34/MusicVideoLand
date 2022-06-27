import {all} from "redux-saga/effects";

import {musicVideoWatcher} from "./musicVideoSagas";
import {searchWatcher} from "./searchSagas";

export default function* rootSaga() {
  yield all([musicVideoWatcher(), searchWatcher()]);
}
