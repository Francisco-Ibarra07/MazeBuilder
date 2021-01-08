import React from "react";
import { Box } from "@chakra-ui/react";
import TopHeading from "./components/TopHeading";
import SubHeading from "./components/SubHeading";
import Maze from "./components/Maze";

function App() {
  return (
    <Box>
      <TopHeading />

      {/* <SubHeading /> */}

      <Maze />
    </Box>
  );
}

export default App;
