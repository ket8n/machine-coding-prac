import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const DownloadinScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const nextProgress = prev + 1;
          return nextProgress > 100 ? 100 : nextProgress;
        });
      }, 400);
      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <>
      <ProgressBar progress={progress} />
    </>
  );
};

export default DownloadinScreen;
