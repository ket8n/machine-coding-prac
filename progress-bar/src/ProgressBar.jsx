import React, { useEffect, useState } from "react";
import "./App.css";

const ProgressBar = ({ progress }) => {
  const [animateProgress, setAnimateProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimateProgress(progress), 100);
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          transform: `translateX(${animateProgress - 100}%)`,
          color: animateProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
