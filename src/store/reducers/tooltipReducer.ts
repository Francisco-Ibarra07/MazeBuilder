import { TileType } from "../../types";
import { ToolActionTypes, CHANGE_TOOL } from "../actions/tooltipActions";

const initialState = TileType.ROAD;

const tooltipReducer = (state = initialState, action: ToolActionTypes) => {
  switch (action.type) {
    case CHANGE_TOOL:
      if (state !== action.payload) {
        return action.payload;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default tooltipReducer;
