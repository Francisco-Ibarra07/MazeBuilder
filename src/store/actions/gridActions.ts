import { Location, TileType } from "../../types";

export const EXPAND_GRID = "EXPAND_GRID";
export const SHRINK_GRID = "SHRINK_GRID";
export const UPDATE_TILE = "UPDATE_TILE";

interface ExpandGridAction {
  type: typeof EXPAND_GRID;
  payload: number;
}

interface ShrinkGridACtion {
  type: typeof SHRINK_GRID;
  payload: number;
}

interface UpdateTileAction {
  type: typeof UPDATE_TILE;
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
    type: EXPAND_GRID,
    payload: num,
  };
}

export function shrinkGrid(num: number): GridActionTypes {
  return {
    type: SHRINK_GRID,
    payload: num,
  };
}

export function updateTile(
  newType: TileType,
  location: Location
): GridActionTypes {
  return {
    type: UPDATE_TILE,
    payload: {
      newType,
      location,
    },
  };
}
