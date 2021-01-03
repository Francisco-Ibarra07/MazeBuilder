import React from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Toolbox from "./components/Toolbox";

function App() {
  return (
    <div className="bg-gray-100 py-4">
      <Header />
      <div className="flex justify-between">
        <Toolbox />
        <Grid />
      </div>
      <Slider />
    </div>
  );
}

export default App;
