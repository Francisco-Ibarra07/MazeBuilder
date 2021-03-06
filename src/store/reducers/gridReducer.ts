import { Location, TileType } from "../../types";
import { deepCopy, isInBounds } from "../../utils";
import {
  GridActionTypes,
  EXPAND_GRID,
  SHRINK_GRID,
  SOLVE_GRID,
  UPDATE_TILE,
  RESIZE_GRID,
} from "../actions/gridActions";
import Queue from "../../utils/Queue";

function createNewGrid(targetSize: number): TileType[][] {
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

function findPath(grid: TileType[][], start: Location, end: Location): number[][] | undefined {
  // Init queue
  let queue = new Queue<Location>();
  queue.enqueue(start);

  // Init dist and visited 2d array
  let currDist = 0;
  let visited: number[][] = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid.length }, () => -1)
  );

  // Perform BFS (level order traversal)
  while (!queue.isEmpty()) {
    const size = queue.size();
    for (let i = 0; i < size; i++) {
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
        return visited;
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
    }
    // Increment distance
    currDist++;
  }

  console.log("End never found: ", visited);
  return undefined;
}

function getNext(visited: number[][], targetNum: number, row: number, col: number): Location {
  // Top
  if (isInBounds(visited, row - 1, col) && visited[row - 1][col] === targetNum) {
    return { row: row - 1, col: col };
  }
  // Right
  else if (isInBounds(visited, row, col + 1) && visited[row][col + 1] === targetNum) {
    return { row: row, col: col + 1 };
  }
  // Bottom
  else if (isInBounds(visited, row + 1, col) && visited[row + 1][col] === targetNum) {
    return { row: row + 1, col: col };
  }
  // Left
  else {
    return { row: row, col: col - 1 };
  }
}

function markPath(
  grid: TileType[][],
  visited: number[][],
  start: Location,
  end: Location
): TileType[][] {
  let dist = visited[end.row][end.col];
  dist--;

  // Start with path directly after the end
  let curr = getNext(visited, dist, end.row, end.col);
  while (!sameLocation(curr, start)) {
    grid[curr.row][curr.col] = TileType.ISPATH;
    dist--;
    curr = getNext(visited, dist, curr.row, curr.col);
  }

  return grid;
}

const max = 16;
const min = 4;
const initialSize = 10;
const initialState: TileType[][] = createNewGrid(initialSize);

const gridReducer = (state = initialState, action: GridActionTypes) => {
  switch (action.type) {
    case EXPAND_GRID: {
      if (state.length + 1 > max) {
        return state;
      }

      return createNewGrid(state.length + 1);
    }

    case SHRINK_GRID: {
      if (state.length - 1 < min) {
        return state;
      }

      return createNewGrid(state.length - 1);
    }

    case RESIZE_GRID: {
      if (state.length === action.payload.newSize) {
        return state;
      }

      return createNewGrid(action.payload.newSize);
    }

    case SOLVE_GRID: {
      console.log("Solving grid:", state);
      const start = action.payload.start;
      const end = action.payload.end;
      const path = findPath(state, start, end);
      if (!path) {
        return state;
      }

      const newGrid = markPath(state, path, start, end);
      return deepCopy(newGrid);
    }

    case UPDATE_TILE: {
      const { newType, location } = action.payload;
      const grid = state;

      // If row and col are out of bounds just return
      if (!isInBounds(grid, location.row, location.col)) {
        return state;
      }

      // Update tile
      grid[location.row][location.col] = newType;

      return deepCopy(grid);
    }

    default:
      return state;
  }
};

export default gridReducer;
