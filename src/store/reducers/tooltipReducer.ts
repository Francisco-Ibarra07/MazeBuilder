import { CONSTANTS } from "../actions";
import { TooltipTypes } from "../../types";
import { ToolActionTypes } from "../actions/tooltipActions";

const initialState = TooltipTypes.ROAD;

const tooltipReducer = (state = initialState, action: ToolActionTypes) => {
  switch (action.type) {
    case CONSTANTS.CHANGE_TOOL:
      return action.payload;
    default:
      return state;
  }
};

export default tooltipReducer;
