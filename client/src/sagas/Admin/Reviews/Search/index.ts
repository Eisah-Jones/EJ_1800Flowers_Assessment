import {all} from 'redux-saga/effects';
import WatchAdminReviewsSearchGetAllReviews from "./GetAll";

function* adminSaga() {
  yield all([
    WatchAdminReviewsSearchGetAllReviews(),
  ])
}

export default adminSaga;