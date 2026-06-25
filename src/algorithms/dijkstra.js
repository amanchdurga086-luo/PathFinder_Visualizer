import { getNeighbors } from "../utils/getNeighbors";

export const dijkstra = (
  grid,
  startNode,
  endNode
) => {
  const visitedNodes = [];

  startNode.distance = 0;

  const unvisitedNodes =
    grid.flat();

  while (
    unvisitedNodes.length
  ) {
    unvisitedNodes.sort(
      (a, b) =>
        a.distance - b.distance
    );

    const closestNode =
      unvisitedNodes.shift();

    if (closestNode.isWall)
      continue;

    if (
      closestNode.distance ===
      Infinity
    ) {
      return visitedNodes;
    }

    visitedNodes.push(
      closestNode
    );

    if (
      closestNode === endNode
    ) {
      return visitedNodes;
    }

    const neighbors =
      getNeighbors(
        closestNode,
        grid
      );

    for (const neighbor of neighbors) {
      const distance =
        closestNode.distance + 1;

      if (
        distance <
        neighbor.distance
      ) {
        neighbor.distance =
          distance;

        neighbor.previousNode =
          closestNode;
      }
    }
  }

  return visitedNodes;
};