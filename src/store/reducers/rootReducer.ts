import { combineReducers } from "redux";
import tooltipReducer from "./tooltipReducer";
import gridReducer from "./gridReducer";

export const rootReducer = combineReducers({
  tooltip: tooltipReducer,
  grid: gridReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
