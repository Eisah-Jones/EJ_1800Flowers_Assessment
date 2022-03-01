import {call, put, takeEvery} from 'redux-saga/effects';
import {getReviewsFromAPIFailure, getReviewsFromAPISuccess} from "../../../../actions/Shared/Reviews";
import ConstantsAdminReviewsSearch from "../../../../constants/Admin/Reviews/Search";
import {APIGetReviews} from "../../../../services/api";

function* SagaAdminReviewsSearchGetAllReviews():any {
  try {
    const response = yield call(APIGetReviews);
    if (response.data !== "undefined")
      yield put(getReviewsFromAPISuccess(response.data));
    else
      yield put(getReviewsFromAPIFailure("Could not retrieve reviews"));
  } catch (e: any) {
    yield put(getReviewsFromAPIFailure(e.message));
  }
}

function* WatchAdminReviewsSearchGetAllReviews() {
  yield takeEvery(
    ConstantsAdminReviewsSearch.GET_ALL_REVIEWS,
    SagaAdminReviewsSearchGetAllReviews,
  )
}

export default WatchAdminReviewsSearchGetAllReviews;