import React from "react";
import { Location, TileType } from "../types";

type TileProps = {
  type: TileType;
  location: Location;
  onClickHandler: (type: TileType, location: Location) => void;
  onMouseOverHandler: (type: TileType, location: Location) => void;
};

function Tile(props: TileProps) {
  const { type, location, onClickHandler, onMouseOverHandler } = props;

  const handleClick = () => {
    onClickHandler(type, location);
  };

  const onMouseOver = () => {
    onMouseOverHandler(type, location);
  };

  let tileColor = "";
  switch (type) {
    case TileType.ROAD:
      tileColor = `bg-green-400`;
      break;
    case TileType.BLOCKADE:
      tileColor = "bg-blue-400";
      break;
    case TileType.FLAG:
      tileColor = "bg-purple-400";
      break;
    case TileType.ROADBLOCK:
      tileColor = "bg-orange-400";
      break;
  }

  return (
    <button
      className={
        tileColor + " border-solid border-2 border-black hover:opacity-80"
      }
      onClick={handleClick}
      onMouseOver={onMouseOver}
    ></button>
  );
}

export default Tile;
