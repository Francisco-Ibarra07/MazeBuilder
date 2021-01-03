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
      <div>Item1</div>
      <div>Item2</div>
      <div>Item3</div>
      <div>Item4</div>
      <div>Item5</div>
      <div>Item6</div>
      <div>Item7</div>
      <div>Item8</div>
      <div>Item9</div>
      <div>Item10</div>
      <div>Item11</div>
      <div>Item12</div>
      <div>Item13</div>
      <div>Item13</div>
      <div>Item6</div>
      <div>Item7</div>
    </div>
  );
}

export default connector(Grid);
