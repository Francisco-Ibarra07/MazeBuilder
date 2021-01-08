import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";
import { connect, ConnectedProps } from "react-redux";
import { Location, MouseState, TileType } from "../types";
import { RootState } from "../store/reducers/rootReducer";
import { updateTile } from "../store/actions/gridActions";
import { addFlag, removeFlag } from "../store/actions/flagActions";
import MazeTile from "./MazeTile";

// Connect Redux
const mapStateToProps = (state: RootState) => ({
  grid: state.grid,
  tooltip: state.tooltip,
  flagLocations: state.flagLocations,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type MazeGridProps = PropsFromRedux;

function MazeGrid(props: MazeGridProps) {
  const { dispatch, grid, tooltip, flagLocations } = props;
  const [mouseState, setMouseState] = useState<MouseState>(MouseState.UP);

  const tileClickHandler = (currTileType: TileType, location: Location) => {
    if (tooltip === currTileType) {
      return;
    } else if (tooltip === TileType.FLAG && flagLocations.length >= 2) {
      return;
    } else if (tooltip !== TileType.FLAG && currTileType === TileType.FLAG) {
      dispatch(removeFlag(location));
    }

    if (tooltip === TileType.FLAG) {
      dispatch(addFlag(location));
    }
    dispatch(updateTile(tooltip, location));
  };

  const onMouseOverHandler = (currTileType: TileType, location: Location) => {
    if (tooltip === TileType.ROADBLOCK || tooltip === TileType.FLAG) {
      return;
    } else if (currTileType === tooltip || mouseState === MouseState.UP) {
      return;
    }

    dispatch(updateTile(tooltip, location));
  };

  const flattenGrid = (): JSX.Element[] => {
    let list: JSX.Element[] = [];
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        list.push(
          <MazeTile
            key={`tile-row${row}-col${col}`}
            type={grid[row][col]}
            location={{ row, col }}
            onClickHandler={tileClickHandler}
            onMouseOverHandler={onMouseOverHandler}
            showBorders
          />
        );
      }
    }

    return list;
  };

  return (
    <Grid
      w={3 / 4}
      h="60vh"
      bg="blue.500"
      onMouseDown={() => setMouseState(MouseState.DOWN)}
      onMouseUp={() => setMouseState(MouseState.UP)}
      templateRows={`repeat(${grid.length}, 1fr)`}
      templateColumns={`repeat(${grid.length}, 1fr)`}
    >
      {flattenGrid()}
    </Grid>
  );
}

export default connector(MazeGrid);
