import React from "react";
import { Location, TileType } from "../types";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { updateTile } from "../store/actions/gridActions";
import Tile from "./Tile";

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

  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div className="tile-row" key={`row-${rowIndex}`}>
          {row.map((value, colIndex) => (
            <Tile
              key={`col-${colIndex}`}
              type={value}
              location={{ row: rowIndex, col: colIndex }}
              onClickHandler={tileClickHandler}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default connector(Grid);
