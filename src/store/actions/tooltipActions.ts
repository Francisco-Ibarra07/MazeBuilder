import { TooltipTypes } from "../../types";

export const CHANGE_TOOL = "CHANGE_TOOL";

interface ChangeToolAction {
  type: typeof CHANGE_TOOL;
  payload: TooltipTypes;
}

export function changeTool(newTool: TooltipTypes): ToolActionTypes {
  return {
    type: CHANGE_TOOL,
    payload: newTool,
  };
}

export type ToolActionTypes = ChangeToolAction;
