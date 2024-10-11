import React from "react";
import AgeCalculator from "./components/AgeCalculator";
import "./index.css";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-300">
      <AgeCalculator />
    </div>
  );
};

export default App;
