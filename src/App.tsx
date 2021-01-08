import React from "react";
import { Box } from "@chakra-ui/react";
import TopHeading from "./components/TopHeading";
import Maze from "./components/Maze";

function App() {
  return (
    <Box>
      <TopHeading />

      <Maze />
    </Box>
  );
}

export default App;
