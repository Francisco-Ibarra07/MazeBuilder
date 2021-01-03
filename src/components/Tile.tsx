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
    <div className="tile-container" onClick={handleClick}>
      <p>Tile type: {type}</p>
    </div>
  );
}

export default Tile;
