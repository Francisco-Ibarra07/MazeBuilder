import React from "react";
import Tile from "./Tile";
import { Location, TileType } from "../types";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { updateTile } from "../store/actions/gridActions";

// Connect Redux
const mapStateToProps = (state: RootState) => ({
  grid: state.grid,
  tooltip: state.tooltip,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type GridProps = PropsFromRedux;

function Grid(props: GridProps) {
  const { dispatch, grid, tooltip } = props;

  const tileClickHandler = (type: TileType, location: Location) => {
    // Only update if clicked tile isn't same as current tooltip
    if (type !== tooltip) {
      dispatch(updateTile(tooltip, location));
    }
  };

  const flattenGrid = (): JSX.Element[] => {
    let list: JSX.Element[] = [];
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        list.push(
          <Tile
            key={`tile-row${row}-col${col}`}
            type={grid[row][col]}
            location={{ row, col }}
            onClickHandler={tileClickHandler}
          />
        );
      }
    }

    return list;
  };

  const styles = {
    gridContainer: {
      gridTemplateRows: `repeat(${grid.length}, minmax(0, 1fr)`,
      gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr)`,
    },
  };

  return (
    <div
      className="bg-pink-500 w-full h-full grid"
      style={styles.gridContainer}
    >
      {flattenGrid()}
    </div>
  );
}

export default connector(Grid);
