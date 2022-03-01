import { InterfaceAPIReviewData } from "../../../services/api";

export interface InterfaceComponentsAdminEditorProps {
  body: string,
  id: number,
  filteredSuggestions: string[],
  querySearchResultsByTitle: Function,
  allReviews: InterfaceAPIReviewData[],
  selectOption: Function,
  setAutocompleteSuggestions: Function,
  title: string,
  updateReview: Function,
  userId: number,
}

export type AdminReviewsEditorProps =
  | InterfaceComponentsAdminEditorProps;