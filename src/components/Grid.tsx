import React from "react";
import { TileType } from "../types";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { updateTile } from "../store/actions/gridActions";
import Tile from "./Tile";

// Connect Redux
const mapStateToProps = (state: RootState) => ({
  grid: state.grid,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type GridProps = PropsFromRedux;

function Grid(props: GridProps) {
  const { dispatch, grid } = props;

  const handleClick = () => {
    dispatch(updateTile(TileType.FINISH, { row: 1, col: 1 }));
    console.log("Updated tile");
  };

  return (
    <div>
      <button onClick={handleClick}>Update tile</button>
      {grid.map((row, index) => (
        <div className="row" key={`row-${index}`}>
          {row.map((value, index) => (
            <Tile key={`col-${index}`} type={value} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default connector(Grid);
