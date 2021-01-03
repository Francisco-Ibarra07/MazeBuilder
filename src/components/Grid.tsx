import React from "react";
import { TileType } from "../types";
import { connect, ConnectedProps } from "react-redux";
import { updateTile } from "../store/actions/gridActions";

const connector = connect();
type PropsFromRedux = ConnectedProps<typeof connector>;
type GridProps = PropsFromRedux;

function Grid(props: GridProps) {
  const { dispatch } = props;
  const handleClick = () => {
    dispatch(updateTile(TileType.ACTIVE, { row: 1, col: 1 }));
    console.log("Updated tile");
  };

  return (
    <div>
      <button onClick={handleClick}>Update tile</button>
    </div>
  );
}

export default connector(Grid);
