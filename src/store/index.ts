export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import {applyMiddleware, legacy_createStore as createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
