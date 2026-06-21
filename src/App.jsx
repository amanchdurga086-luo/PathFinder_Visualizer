import { useState } from "react";
import Grid from "./components/Grid/Grid";
import { createGrid } from "./utils/createGrid";
import Controls from "./components/Controls/Controls";
// ------------------------------------------------
import { bfs } from "./algorithms/bfs";
import { getShortestPath } from "./utils/shortestPath";

function App() {
  const [grid, setGrid] = useState(createGrid());

  const [mousePressed, setMousePressed] = useState(false);

  const [startNode, setStartNode] = useState({
    row: 10,
    col: 5,
  });

  const [endNode, setEndNode] = useState({
    row: 10,
    col: 45,
  });

  const clearBoard = () => {
    setGrid(createGrid());

    setStartNode({
      row: 10,
      col: 5,
    });

    setEndNode({
      row: 10,
      col: 45,
    });
  };
  // -----------------------------------
  const [algorithm, setAlgorithm] = useState("bfs");

  const [speed, setSpeed] = useState(20);

  // ----------------------------------------------------
  const animatePath = (path) => {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const node = path[i];

        if (!node.isStart && !node.isEnd) {
          node.isPath = true;

          setGrid((prev) => [...prev]);
        }
      }, i * 40);
    }
  };

  const animateVisitedNodes = (visitedNodes, shortestPath) => {
    for (let i = 0; i < visitedNodes.length; i++) {
      setTimeout(() => {
        const node = visitedNodes[i];

        if (!node.isStart && !node.isEnd) {
          node.isVisited = true;

          setGrid((prev) => [...prev]);
        }

        if (i === visitedNodes.length - 1) {
          animatePath(shortestPath);
        }
      }, i * speed);
    }
  };

  const visualize = () => {
    // clearVisualization();

    const start = grid[startNode.row][startNode.col];

    const end = grid[endNode.row][endNode.col];

    const visitedNodes = bfs(grid, start, end);

    const shortestPath = getShortestPath(end);

    animateVisitedNodes(visitedNodes, shortestPath);

    // console.log(visitedNodes.length);
    // console.log(shortestPath.length);
  };

  // const clearVisualization = () => {
  //   const newGrid = grid.map((row) =>
  //     row.map((node) => ({
  //       ...node,
  //       isVisited: false,
  //       isPath: false,
  //       previousNode: null,
  //     }))
  //   );

  //   setGrid(newGrid);
  // };

  return (
    <div>
      <Controls
        clearBoard={clearBoard}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        speed={speed}
        setSpeed={setSpeed}
        visualize={visualize}
      />

      <Grid
        grid={grid}
        setGrid={setGrid}
        mousePressed={mousePressed}
        setMousePressed={setMousePressed}
        startNode={startNode}
        setStartNode={setStartNode}
        endNode={endNode}
        setEndNode={setEndNode}
      />
    </div>
  );
}

export default App;
