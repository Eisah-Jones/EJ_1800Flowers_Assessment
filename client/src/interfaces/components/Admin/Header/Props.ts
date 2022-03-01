import {InterfaceAPIReviewData} from "../../../services/api";

export interface InterfaceComponentsAdminHeaderProps {
  allReviews: InterfaceAPIReviewData[],
  getReviews: Function,
  filteredSuggestions: string[],
  queryInput: string,
  queryReviewsByTitle: Function,
  setAutocompleteSuggestions: Function,
  setInput: Function,
}


export type AdminReviewsHeaderProps =
  | InterfaceComponentsAdminHeaderProps;