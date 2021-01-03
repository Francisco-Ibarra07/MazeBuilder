import React from "react";
import { TileType } from "../types";

type TileProps = {
  type: TileType;
};

function Tile(props: TileProps) {
  const { type } = props;

  return <div>Tile type: {type}</div>;
}

export default Tile;
