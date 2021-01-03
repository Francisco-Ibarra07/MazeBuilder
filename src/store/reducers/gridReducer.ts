import { TileType } from "../../types";
import { isInBounds } from "../../utils";
import {
  GridActionTypes,
  EXPAND_GRID,
  SHRINK_GRID,
  UPDATE_TILE,
} from "../actions/gridActions";

function createGrid(targetSize: number): TileType[][] {
  let grid: TileType[][] = [];

  for (let i = 0; i < targetSize; i++) {
    grid[i] = new Array<TileType>();
    for (let j = 0; j < targetSize; j++) {
      grid[i].push(TileType.BLOCKADE);
    }
  }

  return grid;
}

const max = 15;
const min = 4;
const initialSize = 4;
const initialState: TileType[][] = createGrid(initialSize);

const gridReducer = (state = initialState, action: GridActionTypes) => {
  switch (action.type) {
    case EXPAND_GRID:
      if (state.length + 1 > max) {
        return state;
      }

      return createGrid(state.length + 1);
    case SHRINK_GRID:
      if (state.length - 1 < min) {
        return state;
      }

      return createGrid(state.length - 1);
    case UPDATE_TILE:
      const { newType, location } = action.payload;
      const grid = state;

      // If row and col are out of bounds just return
      if (!isInBounds(grid, location.row, location.col)) {
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
