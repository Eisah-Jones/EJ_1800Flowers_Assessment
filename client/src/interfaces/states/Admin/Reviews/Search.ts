import {InterfaceAPIReviewData} from "../../../services/api";

export interface InterfaceStateAdminReviewsSearch {
  allReviews: InterfaceAPIReviewData[],
  filteredSuggestions: string[],
  queryInput: string,
  searchResults: InterfaceAPIReviewData[],
}