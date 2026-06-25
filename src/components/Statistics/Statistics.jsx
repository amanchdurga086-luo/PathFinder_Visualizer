import "./Statistics.css";

const Statistics = ({ stats }) => {
  return (
    <div className="statistics">

      <div>
        <strong>Algorithm:</strong>
        {stats.algorithm}
      </div>

      <div>
        <strong>Visited:</strong>
        {stats.visited}
      </div>

      <div>
        <strong>Path:</strong>
        {stats.pathLength}
      </div>

      <div>
        <strong>Time:</strong>
        {stats.executionTime} ms
      </div>

    </div>
  );
};

export default Statistics;