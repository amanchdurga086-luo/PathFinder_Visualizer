
export const recursiveDivision = (
    grid,
    startNode,
    endNode
) => {

      const walls = [];

      addBorderWalls(
    grid,
    walls,
    startNode,
    endNode
);

divide(
  grid,
  walls,

  1,
  grid.length - 2,

  1,
  grid[0].length - 2,

  "horizontal",

  startNode,
  endNode
);

    return walls;

};


const addBorderWalls = (
  grid,
  walls,
  startNode,
  endNode
) => {

  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {

    for (let col = 0; col < cols; col++) {

      const isBorder =
        row === 0 ||
        row === rows - 1 ||
        col === 0 ||
        col === cols - 1;

      if (!isBorder) continue;

      const node = grid[row][col];

      if (
        node.isStart ||
        node.isEnd
      ) {
        continue;
      }

      walls.push(node);
    }
  }
};

const divide = (
  grid,
  walls,

  rowStart,
  rowEnd,

  colStart,
  colEnd,

  orientation,

  startNode,
  endNode
) => {
  // Base case
  if (
    rowEnd < rowStart ||
    colEnd < colStart
  ) {
    return;
  }

  if (orientation === "horizontal") {
    // Choose an even row for the wall
const wallRow =
  Math.floor(
    Math.random() *
      ((rowEnd - rowStart) / 2 + 1)
  ) * 2 + rowStart;

// Choose an odd column for the gap
const gapCol =
  Math.floor(
    Math.random() *
      ((colEnd - colStart) / 2 + 1)
  ) * 2 + 1 + colStart;

   for (
        let col = colStart;
        col <= colEnd;
        col++
    ) {

        if (col === gapCol)
            continue;

        const node =
            grid[wallRow][col];

        if (
            node.isStart ||
            node.isEnd
        )
            continue;

        walls.push(node);
    }


  } else {

  }
};
