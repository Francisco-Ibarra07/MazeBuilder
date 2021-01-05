export function isInBounds(grid: any[], row: number, col: number): boolean {
  return grid && row >= 0 && row < grid.length && col >= 0 && col < grid[row].length;
}
