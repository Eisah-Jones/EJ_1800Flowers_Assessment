import { Action } from "redux";
import {InterfaceAPIReviewData} from "../../../services/api";


export interface InterfaceActionsAdminReviewsEditorSelectOption extends Action {
  type: string,
  payload: {
    userId: number,
    id: number,
    title: string,
    body: string,
  }
}

export interface InterfaceActionsAdminReviewsEditorQueryReviewsByTitleExact extends Action {
  type: string,
  payload: {
    title: string,
    allReviews: InterfaceAPIReviewData[]
  }
}

export interface InterfaceActionsAdminReviewsEditorQueryResultsByTitle extends Action {
  type: string,
  payload: {
    title: string,
    searchResults: InterfaceAPIReviewData[]
  }
}

export interface InterfaceActionsAdminReviewEditorSetAutocompleteSuggestions extends Action {
  type: string,
  payload: { suggestions: string[] }
}

// NOTE: Having trouble using discriminated union with switch,
// so temporarily using intersection
export type ReviewsEditorAction =
  & InterfaceActionsAdminReviewsEditorSelectOption
  & InterfaceActionsAdminReviewsEditorQueryResultsByTitle
  & InterfaceActionsAdminReviewsEditorQueryReviewsByTitleExact
  & InterfaceActionsAdminReviewEditorSetAutocompleteSuggestions;