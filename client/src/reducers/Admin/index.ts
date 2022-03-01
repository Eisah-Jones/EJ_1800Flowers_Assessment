import { combineReducers } from "redux";
import ReducersAdminReviewsSearch from "./Reviews/Search";
import ReducersAdminReviewsEditor from "./Reviews/Editor";

const ReducersAdmin = combineReducers({
  ReviewsSearch: ReducersAdminReviewsSearch,
  ReviewsEditor: ReducersAdminReviewsEditor,
});

export default ReducersAdmin;