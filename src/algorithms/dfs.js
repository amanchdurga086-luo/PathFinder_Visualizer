import { getNeighbors } from "../utils/getNeighbors";

export const dfs = (
  grid,
  startNode,
  endNode
) => {
  const stack = [];
  const visitedNodes = [];

  const visited = new Set();
  const inStack = new Set();

  stack.push(startNode);

  inStack.add(
    `${startNode.row}-${startNode.col}`
  );

  while (stack.length) {
    const current = stack.pop();
    console.log(current);

    const currentKey =
      `${current.row}-${current.col}`;

    if (visited.has(currentKey))
      continue;

    // visited.add(currentKey);

    visitedNodes.push(current);

    if (current === endNode) {
      return visitedNodes;
    }

    const neighbors =
      getNeighbors(current, grid);

    for (const neighbor of neighbors) {
      const neighborKey =
        `${neighbor.row}-${neighbor.col}`;

      if (
        !visited.has(neighborKey) &&
        !inStack.has(neighborKey)
      ) {

        visited.add(currentKey);
        
        stack.push(neighbor);
        console.log(stack);

        neighbor.previousNode =
        current;
        
        inStack.add(neighborKey);
      }
    }
    
  }

  return visitedNodes;
};