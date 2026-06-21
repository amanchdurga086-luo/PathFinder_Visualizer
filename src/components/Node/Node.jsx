import "./Node.css";

const Node = ({ 
  node,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
 }) => {
  const {
    isStart,
    isEnd,
    isWall,
    isVisited,
    isPath,
  } = node;

  let extraClass = "";

  if (isStart) extraClass = "node-start";
  else if (isEnd) extraClass = "node-end";
  else if (isWall) extraClass = "node-wall";
  else if (isPath) extraClass = "node-path";
  else if (isVisited) extraClass = "node-visited";

  return (
    <div className={`node ${extraClass}`}
    onMouseDown={() =>
      onMouseDown(node.row, node.col)
    }
    onMouseEnter={() =>
      onMouseEnter(node.row, node.col)
    }
    onMouseUp={onMouseUp}
    
    ></div>
  );
};

export default Node;