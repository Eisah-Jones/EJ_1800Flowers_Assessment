import StatesAdminReviewsSearch from "../../../states/Admin/Reviews/Search";
import ConstantsAdminReviewsSearch from "../../../constants/Admin/Reviews/Search";
import produce from "immer";
import { ReviewsSearchAction } from "../../../interfaces/actions/Admin/Reviews/Search";
import ConstantsAdminReviewsEditor from "../../../constants/Admin/Reviews/Editor";
import {InterfaceAPIReviewData} from "../../../interfaces/services/api";

const ReducersAdminReviewsSearch = (
  state = StatesAdminReviewsSearch,
  action: ReviewsSearchAction,
) => {
  let newState;
  switch(action.type) {
    case ConstantsAdminReviewsSearch.GET_REVIEWS_SUCCESS:
      newState = produce(state, (draftState) => {
        const { searchResults } = action.payload;
        if(searchResults) {
          draftState["searchResults"] = searchResults;
          draftState["allReviews"] = searchResults;
        }
      });
      return newState;
    case ConstantsAdminReviewsSearch.SET_AUTOCOMPLETE_SUGGESTIONS:
      newState = produce(state, (draftState) => {
        const { suggestions } = action.payload;
        if(suggestions) draftState["filteredSuggestions"] = suggestions;
      });
      return newState;
    case ConstantsAdminReviewsSearch.SET_INPUT:
      newState = produce(state, (draftState) => {
        const { queryInput } = action.payload;
        draftState["queryInput"] = queryInput;
      });
      return newState;
    case ConstantsAdminReviewsEditor.UPDATE_REVIEW:
      newState = produce(state, (draftState) => {
        const { id, title, body } = action.payload;
        let reviewIdx = -1;
        draftState["allReviews"].some((result, idx) => {
          reviewIdx = idx;
          return result.id === id
        })
        draftState["allReviews"][reviewIdx]["title"] = title;
        draftState["allReviews"][reviewIdx]["body"] = body;
      });
      return newState;
    case ConstantsAdminReviewsSearch.QUERY_REVIEWS_BY_TITLE:
      newState = produce(state, (draftState) => {
        const { titleQuery } = action.payload;
        if (titleQuery === null) {
          draftState["searchResults"] = draftState["allReviews"];
          return;
        }
        const validReviews:InterfaceAPIReviewData[] = [];
        draftState["allReviews"].forEach((review) => {
          if (review.title.indexOf(titleQuery) > -1)
            validReviews.push(review);
        });
        if(titleQuery) draftState["searchResults"] = validReviews;
      });
      return newState;
    default:
      return state;
  }
};

export default ReducersAdminReviewsSearch;