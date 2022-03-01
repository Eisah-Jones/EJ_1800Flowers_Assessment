import ConstantsAdminReviewsSearch from "../../../constants/Admin/Reviews/Search";
import {
  InterfaceActionsAdminReviewsSearchGetAllReviews,
  InterfaceActionsAdminReviewsSearchQueryReviewsByTitle,
  InterfaceActionsAdminReviewSearchSetInput,
  InterfaceActionsAdminReviewSearchSetAutocompleteSuggestions
} from "../../../interfaces/actions/Admin/Reviews/Search";

const ActionsAdminReviewsSearchGetAllReviews = ():
  InterfaceActionsAdminReviewsSearchGetAllReviews => ({
    type: ConstantsAdminReviewsSearch.GET_ALL_REVIEWS
});

const ActionsAdminReviewsSearchSetInput = (
    queryInput: string
): InterfaceActionsAdminReviewSearchSetInput => ({
  type: ConstantsAdminReviewsSearch.SET_INPUT,
  payload: { queryInput }
});

const ActionsAdminReviewsSearchQueryReviewsByTitle = (
    titleQuery: string
): InterfaceActionsAdminReviewsSearchQueryReviewsByTitle => ({
  type: ConstantsAdminReviewsSearch.QUERY_REVIEWS_BY_TITLE,
  payload: { titleQuery },
});

const ActionsAdminReviewsSearchSetAutocompleteSuggestions = (
  suggestions: string[]
): InterfaceActionsAdminReviewSearchSetAutocompleteSuggestions => ({
  type:  ConstantsAdminReviewsSearch.SET_AUTOCOMPLETE_SUGGESTIONS,
  payload: { suggestions },
})

const ActionsAdminReviewsSearch = {
  GetAllReviews: ActionsAdminReviewsSearchGetAllReviews,
  SetAutocompleteSuggestions: ActionsAdminReviewsSearchSetAutocompleteSuggestions,
  SetInput: ActionsAdminReviewsSearchSetInput,
  QueryReviewsByTitle: ActionsAdminReviewsSearchQueryReviewsByTitle,
};

export default ActionsAdminReviewsSearch;