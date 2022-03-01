import ConstantsAdminReviewsEditor from "../../../constants/Admin/Reviews/Editor";
import { ReviewsEditorAction } from "../../../interfaces/actions/Admin/Reviews/Editor";
import StatesAdminReviewsEditor from "../../../states/Admin/Reviews/Editor";
import produce from "immer";

const ReducersAdminReviewsEditor = (
  state = StatesAdminReviewsEditor,
  action: ReviewsEditorAction,
) => {
  let newState;
  switch (action.type) {
    case ConstantsAdminReviewsEditor.SELECT_OPTION:
      newState = produce(state, (draftState) => {
        const { userId, id, title, body } = action.payload;
        draftState["userId"] = userId;
        draftState["id"] = id;
        draftState["title"] = title;
        draftState["body"] = body;
      });
      return newState;
    case ConstantsAdminReviewsEditor.SET_AUTOCOMPLETE_SUGGESTIONS:
      newState = produce(state, (draftState) => {
        const { suggestions } = action.payload;
        if(suggestions) draftState["filteredSuggestions"] = suggestions;
      });
      return newState;
    case ConstantsAdminReviewsEditor.QUERY_REVIEWS_BY_TITLE_EXACT:
      newState = produce(state, (draftState) => {
        const { title, allReviews } = action.payload;
        let reviewIdx = -1;
        let idxAssigned = allReviews.some((review, idx) => {
          reviewIdx = idx;
          return review.title === title;
        })
        if (!idxAssigned)
          return
        const result = allReviews[reviewIdx];
        draftState["userId"] = result.userId;
        draftState["id"] = result.id;
        draftState["title"] = result.title;
        draftState["body"] = result.body;
      });
      return newState;
    default:
      return state;
  }
}

export default ReducersAdminReviewsEditor;