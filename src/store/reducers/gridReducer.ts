import { Location, TileType } from "../../types";
import { isInBounds } from "../../utils";
import {
  GridActionTypes,
  EXPAND_GRID,
  SHRINK_GRID,
  SOLVE_GRID,
  UPDATE_TILE,
} from "../actions/gridActions";
import Queue from "../../utils/Queue";

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

function sameLocation(l1: Location, l2: Location): boolean {
  return l1.row === l2.row && l1.col === l2.col;
}

function isValidTile(grid: TileType[][], visited: number[][], row: number, col: number) {
  // Make sure it's in bounds
  if (!isInBounds(grid, row, col)) {
    return false;
  }

  // Make sure it is a 'ROAD' or a 'FLAG'
  const tile = grid[row][col];
  if (!(tile === TileType.ROAD || tile === TileType.FLAG)) {
    return false;
  }

  // Make sure it hasn't been seen yet
  const vState = visited[row][col];
  if (vState !== -1) {
    return false;
  }

  return true;
}

function solveGrid(grid: TileType[][], start: Location, end: Location) {
  // Init queue
  let queue = new Queue<Location>();
  queue.enqueue(start);
  console.log("Start: ", start);

  // Init dist and visited 2d array
  let currDist = 0;
  let visited: number[][] = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid.length }, () => -1)
  );

  // Perform BFS iteratively
  while (!queue.isEmpty()) {
    // Get next
    const curr = queue.dequeue();

    // If queue item has already been seen, skip it
    if (!curr || visited[curr.row][curr.col] !== -1) {
      continue;
    }

    // Mark curr node as visited by marking its dist from start
    visited[curr.row][curr.col] = currDist;

    // If reached the end, stop bfs search
    if (sameLocation(curr, end)) {
      console.log("End was reached. Final dist: ", currDist);
      break;
    }

    // Add top neighbor
    if (isValidTile(grid, visited, curr.row - 1, curr.col)) {
      queue.enqueue({ row: curr.row - 1, col: curr.col });
    }

    // Add right neighbor
    if (isValidTile(grid, visited, curr.row, curr.col + 1)) {
      queue.enqueue({ row: curr.row, col: curr.col + 1 });
    }

    // Add bottom neighbor
    if (isValidTile(grid, visited, curr.row + 1, curr.col)) {
      queue.enqueue({ row: curr.row + 1, col: curr.col });
    }

    // Add left neighbor
    if (isValidTile(grid, visited, curr.row, curr.col - 1)) {
      queue.enqueue({ row: curr.row, col: curr.col - 1 });
    }

    // Increment distance
    currDist++;
  }

  console.log("Final visited list: ", visited);
  console.log("Grid: ", grid);
}

const max = 15;
const min = 4;
const initialSize = 6;
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

    case SOLVE_GRID:
      console.log("Solving grid:", state);
      solveGrid(state, action.payload.start, action.payload.end);
      return state;

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
