import { TileType } from "../../types";
import { CONSTANTS } from "../actions";
import { GridActionTypes } from "../actions/gridActions";

function createInitialGrid(): TileType[][] {
  let grid: TileType[][] = [];
  const DEFAULT_SIZE = 8;

  for (let i = 0; i <= DEFAULT_SIZE; i++) {
    grid[i] = new Array<TileType>();
    for (let j = 0; j <= DEFAULT_SIZE; j++) {
      grid[i].push(TileType.INACTIVE);
    }
  }

  return grid;
}
const initialState: TileType[][] = createInitialGrid();

const gridReducer = (state = initialState, action: GridActionTypes) => {
  switch (action.type) {
    case CONSTANTS.EXPAND_GRID:
      return state;
    case CONSTANTS.SHRINK_GRID:
      return state;
    case CONSTANTS.UPDATE_TILE:
      return state;
    default:
      return state;
  }
};

export default gridReducer;
