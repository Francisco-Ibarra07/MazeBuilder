import {
  Flex,
  Box,
  Grid,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import React from "react";
import MazeGrid from "./MazeGrid";
import ToolBox from "./ToolBox";

function Maze() {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" mt={6}>
      <Flex w="100%" flexDirection="column" justifyContent="center" alignItems="center">
        {/* Tools */}
        <ToolBox />

        {/* Maze grid */}
        <MazeGrid />
      </Flex>

      {/* Slider */}
      <Slider aria-label="grid-slider" defaultValue={10} mt={2} w={3 / 8} min={4} max={16}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={10}>
          <Tooltip label="4x4">4x4</Tooltip>
        </SliderThumb>
      </Slider>

      <Button bg="purple.200" mt={1}>
        Solve!
      </Button>
    </Flex>
  );
}

export default Maze;
