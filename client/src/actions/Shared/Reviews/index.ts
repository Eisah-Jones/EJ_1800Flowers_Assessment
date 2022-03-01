import { InterfaceAPIReviewData } from "../../../interfaces/services/api";
import ConstantsAdminReviewsSearch from "../../../constants/Admin/Reviews/Search";

export const getReviewsFromAPIFailure = (
    error: string,
) => ({
  type: ConstantsAdminReviewsSearch.GET_REVIEWS_FAILURE,
  error
});

export const getReviewsFromAPISuccess = (
    payload: InterfaceAPIReviewData[],
) => ({
  type: ConstantsAdminReviewsSearch.GET_REVIEWS_SUCCESS,
  payload: { searchResults: payload }
});

export const queryReviewsByTitleFailure = (
    error: string,
) => ({
  type: ConstantsAdminReviewsSearch.QUERY_REVIEWS_BY_TITLE_FAILURE,
  payload: { error }
});

export const queryReviewsByTitleSuccess = (
    queryResults: InterfaceAPIReviewData[],
) => ({
  type: ConstantsAdminReviewsSearch.QUERY_REVIEWS_BY_TITLE_SUCCESS,
  payload: { queryResults }
});