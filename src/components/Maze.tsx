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
import ToolBox from "./ToolBox";

function Maze() {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" mt={6}>
      <Flex w="100%" flexDirection="column" justifyContent="center" alignItems="center">
        {/* Tools */}
        <ToolBox />

        {/* Maze grid */}
        <Grid
          w={3 / 4}
          h="60vh"
          bg="blue.500"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
        >
          <Box>Hello</Box>
          <Box>Hello</Box>
          <Box>Hello</Box>
          <Box>Hello</Box>
        </Grid>
      </Flex>

      {/* Slider */}
      <Slider aria-label="grid-slider" defaultValue={10} mt={4} w={3 / 8} min={4} max={16}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={10}>
          <Tooltip label="4x4">4x4</Tooltip>
        </SliderThumb>
      </Slider>

      <Button bg="purple.200">Solve!</Button>
    </Flex>
  );
}

export default Maze;
