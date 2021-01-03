import React from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Toolbox from "./components/Toolbox";

function App() {
  return (
    <div className="bg-gray-400 flex flex-col min-h-screen m-0 p-0">
      <Header />

      {/* Body pane */}
      <div className="flex flex-grow">
        <div className="flex flex-col justify-center min-w-full">
          <div className="flex min-w-full h-4/5">
            <Toolbox />
            {/* Grid + slider container */}
            <div className="flex flex-col ml-44 w-3/4 bg-green-400">
              {/* Grid Container */}
              <div className="w-full h-5/6 bg-blue-600">
                <div className="flex justify-center items-center h-full">
                  <h1>Grid Area</h1>
                  {/* <Grid /> */}
                </div>
              </div>
              {/* Slider container */}
              <div className="h-1/6 bg-purple-500">
                <div className="flex justify-center items-center h-full">
                  <Slider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
