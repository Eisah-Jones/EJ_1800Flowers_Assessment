import { all } from 'redux-saga/effects';
import adminSaga from "./Admin/Reviews/Search";

function* rootSaga() {
  yield all([
    adminSaga(),
  ])
}

export default rootSaga;