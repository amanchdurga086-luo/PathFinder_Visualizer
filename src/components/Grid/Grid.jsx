import { useState } from "react";

import Node from "../Node/Node";
import "./Grid.css";

const Grid = ({
  grid,
  setGrid,

  mousePressed,
  setMousePressed,

  startNode,
  setStartNode,

  endNode,
  setEndNode,
}) => {
  const [movingStart, setMovingStart] = useState(false);
  const [movingEnd, setMovingEnd] = useState(false);

  const handleMouseDown = (row, col) => {
    const node = grid[row][col];

    if (node.isStart) {
      setMovingStart(true);
      setMousePressed(true);
      return;
    }

    if (node.isEnd) {
      setMovingEnd(true);
      setMousePressed(true);
      return;
    }

    const newGrid = grid.slice();

    newGrid[row][col].isWall = !newGrid[row][col].isWall;

    setGrid(newGrid);

    setMousePressed(true);
  };

  // untill mouse pressed
  const handleMouseEnter = (row, col) => {
    if (movingStart) {
      moveStartNode(row, col);
      return;
    }

    if (movingEnd) {
      moveEndNode(row, col);
      return;
    }

    if (!mousePressed) return;

    const newGrid = grid.slice();

    if (!newGrid[row][col].isStart && !newGrid[row][col].isEnd) {
      newGrid[row][col].isWall = true;
    }

    setGrid(newGrid);
  };

  // runs when mouse released
  const handleMouseUp = () => {
    setMousePressed(false);
    setMovingStart(false);
    setMovingEnd(false);
  };

  const moveStartNode = (row, col) => {
    if (grid[row][col].isWall) return;
    if (grid[row][col].isEnd) return;

    const newGrid = grid.slice();

    // Remove every start node
    for (const r of newGrid) {
    for (const node of r) {
      node.isStart = false;
    }
  }

    newGrid[startNode.row][startNode.col].isStart = false;
    newGrid[startNode.row][startNode.col].isVisited = false;
    newGrid[startNode.row][startNode.col].isPath = false;
    newGrid[startNode.row][startNode.col].previousNode = null;

    newGrid[row][col].isStart = true;
    newGrid[row][col].isVisited = false;
    newGrid[row][col].isPath = false;
    newGrid[row][col].previousNode = null;

    setStartNode({ row, col });

    setGrid(newGrid);
  };

  const moveEndNode = (row, col) => {
    if (grid[row][col].isWall) return;
    if (grid[row][col].isStart) return;

    const newGrid = grid.slice();

    // Remove every end node
  for (const r of newGrid) {
    for (const node of r) {
      node.isEnd = false;
    }
  }

    newGrid[endNode.row][endNode.col].isEnd = false;
    newGrid[endNode.row][endNode.col].isVisited = false;
    newGrid[endNode.row][endNode.col].isPath = false;
    newGrid[endNode.row][endNode.col].previousNode = null;

    newGrid[row][col].isEnd = true;
    newGrid[row][col].isVisited = false;
    newGrid[row][col].isPath = false;
    newGrid[row][col].previousNode = null;

    setEndNode({ row, col });

    setGrid(newGrid);
  };

  return (
    <div className="grid-container">
      {grid.map((row, rowIdx) => (
        <div key={rowIdx} className="grid-row">
          {row.map((node, nodeIdx) => (
            <Node
              key={nodeIdx}
              node={node}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseUp={handleMouseUp}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
