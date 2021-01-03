import { TileType } from "../../types";

export const CHANGE_TOOL = "CHANGE_TOOL";

interface ChangeToolAction {
  type: typeof CHANGE_TOOL;
  payload: TileType;
}

export function changeTool(newTool: TileType): ToolActionTypes {
  return {
    type: CHANGE_TOOL,
    payload: newTool,
  };
}

export type ToolActionTypes = ChangeToolAction;
