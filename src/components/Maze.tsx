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
import { expandGrid, shrinkGrid, solveGrid } from "../store/actions/gridActions";

// Connect Redux
const mapStateToProps = (state: RootState) => ({
  grid: state.grid,
  flagLocations: state.flagLocations,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type MazeProps = PropsFromRedux;

function Maze(props: MazeProps) {
  const { grid, flagLocations, dispatch } = props;
  const [isSolving, setIsSolving] = useState(false);

  const handleDecrement = () => {
    dispatch(shrinkGrid());
    dispatch(resetFlags());
  };

  const handleIncrement = () => {
    dispatch(expandGrid());
    dispatch(resetFlags());
  };

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
