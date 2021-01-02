import React from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Tooltip />
        <Grid />
        <Slider />
      </div>
    </div>
  );
}

export default App;
