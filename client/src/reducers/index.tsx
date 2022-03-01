import { combineReducers } from "redux";
import ReducersAdmin from "./Admin";

const rootReducer = combineReducers({
  Admin: ReducersAdmin,
});

export default rootReducer;