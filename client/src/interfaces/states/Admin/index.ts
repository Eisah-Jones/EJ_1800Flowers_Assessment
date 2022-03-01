import { InterfaceStateAdminReviewsSearch } from "./Reviews/Search";
import { InterfaceStateAdminReviewsEditor } from "./Reviews/Editor";

interface InterfaceAdminState {
  Admin: {
    ReviewsSearch: InterfaceStateAdminReviewsSearch,
    ReviewsEditor: InterfaceStateAdminReviewsEditor,
  }
}

export default InterfaceAdminState;