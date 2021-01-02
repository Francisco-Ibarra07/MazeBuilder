import { CONSTANTS } from "./index";
import { Location, TileType } from "../../types";

interface ExpandGridAction {
  type: string;
  payload: number;
}

interface ShrinkGridACtion {
  type: string;
  payload: number;
}

interface UpdateTileAction {
  type: string;
  payload: {
    newType: TileType;
    location: Location;
  };
}

export type GridActionTypes =
  | ExpandGridAction
  | ShrinkGridACtion
  | UpdateTileAction;

export function expandGrid(num: number): GridActionTypes {
  return {
    type: CONSTANTS.EXPAND_GRID,
    payload: num,
  };
}

export function shrinkGrid(num: number): GridActionTypes {
  return {
    type: CONSTANTS.SHRINK_GRID,
    payload: num,
  };
}

export function updateTile(
  newType: TileType,
  location: Location
): GridActionTypes {
  return {
    type: CONSTANTS.UPDATE_TILE,
    payload: {
      newType,
      location,
    },
  };
}
