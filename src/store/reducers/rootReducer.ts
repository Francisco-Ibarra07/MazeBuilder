import { combineReducers } from "redux";
import gridReducer from "./gridReducer";
import flagReducer from "./flagReducer";
import tooltipReducer from "./tooltipReducer";

export const rootReducer = combineReducers({
  grid: gridReducer,
  tooltip: tooltipReducer,
  flagLocations: flagReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
