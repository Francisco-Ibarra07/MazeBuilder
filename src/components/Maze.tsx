import {
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MazeGrid from "./MazeGrid";
import ToolBox from "./ToolBox";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { resetFlags } from "../store/actions/flagActions";
import { solveGrid, resizeGrid } from "../store/actions/gridActions";

// Connect Redux
const mapStateToProps = (state: RootState) => ({
  flagLocations: state.flagLocations,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type MazeProps = PropsFromRedux;

function Maze(props: MazeProps) {
  const { flagLocations, dispatch } = props;
  const [isSolving, setIsSolving] = useState(false);
  const [sliderValue, setSliderValue] = useState(10);
  const [lastSliderValue, setLastSliderValue] = useState(10);

  const handleSolve = () => {
    if (flagLocations.length !== 2) {
      console.log("Not enough flags on the board");
      return;
    }

    setIsSolving(true);
    const start = flagLocations[0];
    const end = flagLocations[1];
    dispatch(solveGrid(start, end));
    setIsSolving(false);
  };

  const handleSliderChange = (newSliderValue: number) => {
    if (lastSliderValue === newSliderValue) {
      console.log("same");
      return;
    }

    dispatch(resizeGrid(newSliderValue));
    dispatch(resetFlags());
    setLastSliderValue(newSliderValue);
  };

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" mt={6}>
      <Flex w="100%" flexDirection="column" justifyContent="center" alignItems="center">
        {/* Tools */}
        <ToolBox />

        {/* Maze grid */}
        <MazeGrid />
      </Flex>

      {/* Slider */}
      <Slider
        mt={2}
        w={3 / 8}
        min={4}
        max={16}
        value={sliderValue}
        aria-label="grid-slider"
        focusThumbOnChange={false}
        onChange={(val) => setSliderValue(val)}
        onChangeEnd={handleSliderChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={12}>
          <Tooltip>{`${sliderValue}x${sliderValue}`}</Tooltip>
        </SliderThumb>
      </Slider>

      <Button
        mt={1}
        variant="outline"
        onClick={handleSolve}
        isLoading={isSolving}
        isDisabled={flagLocations.length !== 2}
      >
        Solve!
      </Button>
    </Flex>
  );
}

export default connector(Maze);
