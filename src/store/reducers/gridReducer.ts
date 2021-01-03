import { TileType } from "../../types";
import { isInBounds } from "../../utils";
import {
  GridActionTypes,
  EXPAND_GRID,
  SHRINK_GRID,
  UPDATE_TILE,
} from "../actions/gridActions";

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
    case EXPAND_GRID:
      return state;
    case SHRINK_GRID:
      return state;
    case UPDATE_TILE:
      const { newType, location } = action.payload;
      const grid = state;

      // If row and col are out of bounds just return
      if (!isInBounds(grid, location.row, location.col)) {
        console.log("Out of bounds", location, state);
        return state;
      }

      grid[location.row][location.col] = newType;
      console.log("Updated");
      return grid;

    default:
      return state;
  }
};

export default gridReducer;
