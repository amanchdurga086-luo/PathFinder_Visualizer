export const createNode = (row, col) => {
  return {
    row,
    col,

    isStart: row === 10 && col === 5,
    isEnd: row === 10 && col === 45,

    isWall: false,
    isVisited: false,
    isPath: false,

    distance: Infinity,
    previousNode: null,
  };
};

export const createGrid = () => {
  const grid = [];

  for (let row = 0; row < 20; row++) {
    const currentRow = [];

    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(row, col));
    }

    grid.push(currentRow);
  }

  return grid;
};