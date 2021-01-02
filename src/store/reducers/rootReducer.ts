import { combineReducers } from "redux";
import tooltipReducer from "./tooltipReducer";
import gridReducer from "./gridReducer";

export default combineReducers({
  tooltip: tooltipReducer,
  grid: gridReducer,
});
