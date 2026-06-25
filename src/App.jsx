import { useState } from "react";
import Grid from "./components/Grid/Grid";
import { createGrid } from "./utils/createGrid";
import Controls from "./components/Controls/Controls";
// ------------------------------------------------
import { bfs } from "./algorithms/bfs";
import { dfs } from "./algorithms/dfs";
import { dijkstra } from "./algorithms/dijkstra";
import { getShortestPath } from "./utils/shortestPath";
import "./App.css";
import Legend from "./components/Legend/Legend";
import Statistics from "./components/Statistics/Statistics";
import { randomMaze } from "./algorithms/randomMaze";
import {recursiveDivision} from "./maze/recursiveDivision"

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

  const [stats, setStats] = useState({
    algorithm: "",
    visited: 0,
    pathLength: 0,
    executionTime: 0,
  });

  // const [movingStart, setMovingStart] = useState(false);

  // const [movingEnd, setMovingEnd] = useState(false);

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

   const [darkMode, setDarkMode] = useState(false);

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
    const startTime = performance.now();

    const start = grid[startNode.row][startNode.col];

    const end = grid[endNode.row][endNode.col];

    let visitedNodes = [];

    switch (algorithm) {
      case "bfs":
        visitedNodes = bfs(grid, start, end);
        break;

      case "dfs":
        visitedNodes = dfs(grid, start, end);
        break;

      case "dijkstra":
        visitedNodes = dijkstra(grid, start, end);
        break;

      default:
        return;
    }

    const shortestPath = getShortestPath(end);

    animateVisitedNodes(visitedNodes, shortestPath);

    const endTime = performance.now();

    setStats({
      algorithm: algorithm.toUpperCase(),
      visited: visitedNodes.length,
      pathLength: shortestPath.length,
      executionTime: (endTime - startTime).toFixed(2),
    });

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
const generateRandomMaze = () => {
  const newGrid = randomMaze(
    grid,
    startNode,
    endNode
  );

  setGrid(newGrid);
};
// _---------------------------

const generateRecursiveMaze = () => {
  const walls = recursiveDivision(
    grid,
    startNode,
    endNode
  );

  // TEMPORARY (for testing only)
  walls.forEach((node) => {
    node.isWall = true;
  });

  setGrid([...grid]);
};


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Controls
        clearBoard={clearBoard}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        speed={speed}
        setSpeed={setSpeed}
        visualize={visualize}
        darkMode={darkMode}
        setDarkMode={setDarkMode}

        generateRandomMaze={generateRandomMaze}
        generateRecursiveMaze={generateRecursiveMaze}
      />

      <Legend />

      <Statistics stats={stats} />

      <Grid
        grid={grid}
        setGrid={setGrid}
        mousePressed={mousePressed}
        setMousePressed={setMousePressed}
        startNode={startNode}
        setStartNode={setStartNode}
        endNode={endNode}
        setEndNode={setEndNode}
        // movingStart={movingStart}
        // setMovingStart={setMovingStart}
        // movingEnd={movingEnd}
        // setMovingEnd={setMovingEnd}
      />
    </div>
  );
}

export default App;
