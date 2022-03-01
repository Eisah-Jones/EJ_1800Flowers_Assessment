import {InterfaceAPIReviewData} from "../../../services/api";

export interface InterfaceComponentsAdminSearchResultsProps {
  searchResults: InterfaceAPIReviewData[];
  selectOption: Function;
}

export type AdminReviewsSearchResultsProps =
  | InterfaceComponentsAdminSearchResultsProps;