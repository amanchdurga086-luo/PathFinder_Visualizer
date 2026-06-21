import { getNeighbors } from "../utils/getNeighbors";

export const bfs = (
  grid,
  startNode,
  endNode
) => {
  const queue = [];
  const visitedNodes = [];

  const visited = new Set();

  queue.push(startNode);

  visited.add(
    `${startNode.row}-${startNode.col}`
  );

  while (queue.length) {
    const current = queue.shift();

    visitedNodes.push(current);

    if (current === endNode) {
      return visitedNodes;
    }

    const neighbors = getNeighbors(
      current,
      grid
    );

    for (const neighbor of neighbors) {
      const key =
        `${neighbor.row}-${neighbor.col}`;

      if (!visited.has(key)) {
        visited.add(key);

        neighbor.previousNode = current;

        queue.push(neighbor);
      }
    }
  }

  return visitedNodes;
};