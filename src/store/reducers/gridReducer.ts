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
  const DEFAULT_SIZE = 2;

  for (let i = 0; i < DEFAULT_SIZE; i++) {
    grid[i] = new Array<TileType>();
    for (let j = 0; j < DEFAULT_SIZE; j++) {
      grid[i].push(TileType.BLOCKADE);
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

      const newGrid = grid.map((row, index) => {
        if (index === location.row) {
          return row.map((item, index) => {
            if (index === location.col) {
              return newType;
            } else {
              return item;
            }
          });
        } else {
          return row;
        }
      });

      return newGrid;

    default:
      return state;
  }
};

export default gridReducer;
