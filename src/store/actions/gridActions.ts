import { Location, TileType } from "../../types";

export const EXPAND_GRID = "EXPAND_GRID";
export const SHRINK_GRID = "SHRINK_GRID";
export const SOLVE_GRID = "SOLVE_GRID";
export const UPDATE_TILE = "UPDATE_TILE";

interface ExpandGridAction {
  type: typeof EXPAND_GRID;
}

interface ShrinkGridAction {
  type: typeof SHRINK_GRID;
}

interface SolveGridAction {
  type: typeof SOLVE_GRID;
  payload: {
    start: Location;
    end: Location;
  };
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
  | ShrinkGridAction
  | SolveGridAction
  | UpdateTileAction;

export function expandGrid(): GridActionTypes {
  return {
    type: EXPAND_GRID,
  };
}

export function shrinkGrid(): GridActionTypes {
  return {
    type: SHRINK_GRID,
  };
}

export function solveGrid(start: Location, end: Location): GridActionTypes {
  return {
    type: SOLVE_GRID,
    payload: {
      start,
      end,
    },
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
