import "./Controls.css";

const Controls = ({
  clearBoard,
  algorithm,
  setAlgorithm,
  speed,
  setSpeed,
  visualize,
}) => {
  return (
    <div>
      <div className="controls">
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="bfs">BFS</option>

          <option value="dfs">DFS</option>

          <option value="dijkstra">Dijkstra</option>
        </select>

        <input
          type="range"
          min="5"
          max="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />

        <button onClick={visualize}>Visualize</button>
      </div>
      
      <button onClick={clearBoard}>Clear Board</button>
    </div>
  );
};

export default Controls;
