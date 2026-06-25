export const getNeighbors = (node, grid) => {
  const neighbors = [];

  const { row, col } = node;

  if (row > 0)
    neighbors.push(grid[row - 1][col]); // Up

  if (col > 0)
    neighbors.push(grid[row][col - 1]); // Left

  if (row < grid.length - 1)
    neighbors.push(grid[row + 1][col]); // Down

  if (col < grid[0].length - 1)
    neighbors.push(grid[row][col + 1]); // Right

  return neighbors.filter(
    (neighbor) => !neighbor.isWall
  );
};