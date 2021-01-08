import {
  Flex,
  Box,
  Grid,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

function Maze() {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" mt={8}>
      <Flex w="100%" flexDirection="column" justifyContent="center" alignItems="center">
        {/* Tools */}
        <Flex w={3 / 4} h="80px" borderTopRadius="20px" bg="green.200">
          <Box>Tool1</Box>
          <Box>Tool2</Box>
          <Box>Tool3</Box>
          <Box>Tool4</Box>
        </Flex>

        {/* Maze grid */}
        <Grid
          w={3 / 4}
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
    </Flex>
  );
}

export default Maze;
