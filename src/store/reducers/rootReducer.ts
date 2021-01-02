import { combineReducers } from "redux";
import tooltipReducer from "./tooltipReducer";

export default combineReducers({
  tooltip: tooltipReducer,
});
