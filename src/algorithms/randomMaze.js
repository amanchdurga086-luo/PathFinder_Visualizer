export const randomMaze = (
  grid,
  startNode,
  endNode
) => {
  const newGrid = grid.map((row) =>
    row.map((node) => ({
      ...node,
      isWall: false,
      isVisited: false,
      isPath: false,
      previousNode: null,
    }))
  );

  for (let row = 0; row < newGrid.length; row++) {
    for (let col = 0; col < newGrid[0].length; col++) {

      const node = newGrid[row][col];

      if (
        node.isStart ||
        node.isEnd
      )
        continue;

      if (Math.random() < 0.28) {
        node.isWall = true;
      }
    }
  }

  return newGrid;
};