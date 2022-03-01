import ConstantsAdminReviewsEditor from "../../../constants/Admin/Reviews/Editor";
import {
  InterfaceActionsAdminReviewsEditorSelectOption,
  InterfaceActionsAdminReviewsEditorQueryReviewsByTitleExact,
  InterfaceActionsAdminReviewEditorSetAutocompleteSuggestions
} from "../../../interfaces/actions/Admin/Reviews/Editor";
import {InterfaceActionAdminReviewsEditorUpdateReview} from "../../../interfaces/actions/Admin/Reviews/Search";
import {InterfaceAPIReviewData} from "../../../interfaces/services/api";


const ActionsAdminReviewsEditorSelectOption = (
    userId: number,
    id: number,
    title: string,
    body: string,
): InterfaceActionsAdminReviewsEditorSelectOption => ({
  type: ConstantsAdminReviewsEditor.SELECT_OPTION,
  payload: { userId, id, title, body },
});

const ActionsAdminReviewsEditorQueryReviewsByTitleExact = (
    title: string,
    allReviews: InterfaceAPIReviewData[]
): InterfaceActionsAdminReviewsEditorQueryReviewsByTitleExact => ({
  type: ConstantsAdminReviewsEditor.QUERY_REVIEWS_BY_TITLE_EXACT,
  payload: { title, allReviews },
})

const ActionsAdminReviewsEditorUpdateReview = (
    id: number,
    title: string,
    body: string,
): InterfaceActionAdminReviewsEditorUpdateReview => ({
  type: ConstantsAdminReviewsEditor.UPDATE_REVIEW,
  payload: { id, title, body },
})

const ActionsAdminReviewsEditorSetAutocompleteSuggestions = (
  suggestions: string[]
): InterfaceActionsAdminReviewEditorSetAutocompleteSuggestions => ({
  type:  ConstantsAdminReviewsEditor.SET_AUTOCOMPLETE_SUGGESTIONS,
  payload: { suggestions },
})


const ActionsAdminReviewsEditor = {
  SelectOption: ActionsAdminReviewsEditorSelectOption,
  QuerySearchResultsByTitle: ActionsAdminReviewsEditorQueryReviewsByTitleExact,
  SetAutocompleteSuggestions: ActionsAdminReviewsEditorSetAutocompleteSuggestions,
  UpdateReview: ActionsAdminReviewsEditorUpdateReview,
};

export default ActionsAdminReviewsEditor;