import "./App.css";
import ProgressBar from "./ProgressBar";

function App() {
  const percentages = [0, 5, 10, 15, 30, 50, 70, 90, 100];

  return (
    <>
      <div>
        <h1>Progress bar</h1>

        {percentages.map((percent) => (
          <ProgressBar key={percent} progress={percent} />
        ))}
      </div>
    </>
  );
}

export default App;
