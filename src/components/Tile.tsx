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
    <div className="bg-blue-400 w-8 border-gray-400" onClick={handleClick}>
      T
    </div>
  );
}

export default Tile;
