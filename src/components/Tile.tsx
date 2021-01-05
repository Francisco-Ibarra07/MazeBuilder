import React from "react";
import { Location, TileType } from "../types";

type TileProps = {
  type: TileType;
  location: Location;
  showBorders?: boolean;
  onClickHandler: (type: TileType, location: Location) => void;
  onMouseOverHandler: (type: TileType, location: Location) => void;
};

function Tile(props: TileProps) {
  const { type, location, showBorders, onClickHandler, onMouseOverHandler } = props;

  const handleClick = () => {
    onClickHandler(type, location);
  };

  const onMouseOver = () => {
    onMouseOverHandler(type, location);
  };

  let tileColor = "";
  switch (type) {
    case TileType.ROAD:
      tileColor = "bg-green-400";
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
    case TileType.ISPATH:
      tileColor = "bg-green-600";
      break;
  }

  let borders = showBorders ? "border-solid border-2 border-black" : "";

  return (
    <button
      className={tileColor + " hover:opacity-40 " + borders}
      onClick={handleClick}
      onMouseOver={onMouseOver}
    >
      {type === TileType.ISPATH && (
        <img
          src="https://cdn2.iconfinder.com/data/icons/small-buttons/64/Red_active_button-128.png"
          alt="dot"
          width={50}
        />
      )}
    </button>
  );
}

export default Tile;
