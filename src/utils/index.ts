export function isInBounds(grid: any[], row: number, col: number): boolean {
  return grid && row >= 0 && row < grid.length && col >= 0 && col < grid[row].length;
}

export function deepCopy(grid: any[][]) {
  return grid.map((row) => {
    return row.map((item) => {
      return item;
    });
  });
}
