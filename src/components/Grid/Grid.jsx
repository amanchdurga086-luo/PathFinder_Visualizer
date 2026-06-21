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
      return;
    }

    if (node.isEnd) {
      setMovingEnd(true);
      return;
    }

    const newGrid = grid.slice();

    newGrid[row][col].isWall =
      !newGrid[row][col].isWall;

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

    if (
      !newGrid[row][col].isStart &&
      !newGrid[row][col].isEnd
    ) {
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
    const newGrid = grid.slice();

    newGrid[startNode.row][startNode.col].isStart =
      false;

    newGrid[row][col].isStart = true;

    setStartNode({ row, col });

    setGrid(newGrid);
  };

  const moveEndNode = (row, col) => {
    const newGrid = grid.slice();

    newGrid[endNode.row][endNode.col].isEnd =
      false;

    newGrid[row][col].isEnd = true;

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