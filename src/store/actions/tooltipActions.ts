import { CONSTANTS } from "./index";
import { TooltipTypes } from "../../types";

interface ChangeToolAction {
  type: string;
  payload: TooltipTypes;
}

export function changeTool(newTool: TooltipTypes): ToolActionTypes {
  return {
    type: CONSTANTS.CHANGE_TOOL,
    payload: newTool,
  };
}

export type ToolActionTypes = ChangeToolAction;
