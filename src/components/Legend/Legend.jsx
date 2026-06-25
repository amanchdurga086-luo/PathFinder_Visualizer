import React from "react";
import "./Legend.css";

const Legend = () => {
  return (
    <>
      <div className="legend">
        <div className="legend-item">
          <div className="legend-box start"></div>
          <span>Start</span>
        </div>

        <div className="legend-item">
          <div className="legend-box end"></div>
          <span>End</span>
        </div>

        <div className="legend-item">
          <div className="legend-box wall"></div>
          <span>Wall</span>
        </div>

        <div className="legend-item">
          <div className="legend-box visited"></div>
          <span>Visited</span>
        </div>

        <div className="legend-item">
          <div className="legend-box path"></div>
          <span>Path</span>
        </div>
      </div>
    </>
  );
};

export default Legend;
