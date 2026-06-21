import { getNeighbors } from "../utils/getNeighbors";

export const dfs = (
  grid,
  startNode,
  endNode
) => {
  const stack = [];
  const visitedNodes = [];

  const visited = new Set();

  stack.push(startNode);

  while (stack.length) {
    const current = stack.pop();

    const key =
      `${current.row}-${current.col}`;

    if (visited.has(key))
      continue;

    visited.add(key);

    visitedNodes.push(current);

    if (current === endNode) {
      return visitedNodes;
    }

    const neighbors =
      getNeighbors(current, grid);

    for (const neighbor of neighbors) {
      const nKey =
        `${neighbor.row}-${neighbor.col}`;

      if (!visited.has(nKey)) {
        neighbor.previousNode =
          current;

        stack.push(neighbor);
      }
    }
  }

  return visitedNodes;
};