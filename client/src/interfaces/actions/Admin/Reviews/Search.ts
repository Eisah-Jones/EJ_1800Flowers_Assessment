import { Action } from "redux";
import { InterfaceAPIReviewData } from "../../../services/api";


export interface InterfaceActionsAdminReviewsSearchGetAllReviews extends Action {
  type: string,
}

export interface InterfaceActionsAdminReviewsSearchGetAllReviewsSuccess extends Action {
  type: string,
  payload: { searchResults: InterfaceAPIReviewData[]},
}

export interface InterfaceActionsAdminReviewsSearchQueryReviewsByTitle extends Action {
  type: string,
  payload: { titleQuery: string },
}

export interface InterfaceActionsAdminReviewSearchSetAutocompleteSuggestions extends Action {
  type: string,
  payload: { suggestions: string[] }
}

export interface InterfaceActionsAdminReviewSearchSetInput extends Action {
  type: string,
  payload: { queryInput: string },
}

export interface InterfaceActionAdminReviewsEditorUpdateReview extends Action {
  type: string,
  payload: {
    id: number,
    title: string,
    body: string,
  },
}

// NOTE: Having trouble using discriminated union with switch,
// so temporarily using intersection
export type ReviewsSearchAction =
  & InterfaceActionsAdminReviewsSearchGetAllReviews
  & InterfaceActionsAdminReviewsSearchGetAllReviewsSuccess
  & InterfaceActionsAdminReviewSearchSetInput
  & InterfaceActionAdminReviewsEditorUpdateReview
  & InterfaceActionsAdminReviewsSearchQueryReviewsByTitle
  & InterfaceActionsAdminReviewSearchSetAutocompleteSuggestions;