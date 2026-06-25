import "./Controls.css";

const Controls = ({
  clearBoard,
  algorithm,
  setAlgorithm,
  speed,
  setSpeed,
  visualize,
  darkMode,
  setDarkMode,
  generateRandomMaze,
  generateRecursiveMaze,//------------
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

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        <button onClick={generateRandomMaze}>Random Maze</button>

      <button onClick={generateRecursiveMaze}>
  Recursive Maze
</button>//----------------------
      </div>

      <button onClick={clearBoard}>Clear Board</button>
    </div>
  );
};

export default Controls;
