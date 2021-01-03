import React from "react";
import { Location, TileType } from "../types";

type TileProps = {
  type: TileType;
  location: Location;
  onClickHandler: (type: TileType, location: Location) => void;
};

function Tile(props: TileProps) {
  const { type, location, onClickHandler } = props;

  const handleClick = () => {
    onClickHandler(type, location);
  };

  return (
    <button className="bg-blue-400" onClick={handleClick}>
      {type}
    </button>
  );
}

export default Tile;
