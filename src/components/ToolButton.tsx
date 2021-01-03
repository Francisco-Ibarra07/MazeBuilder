import React from "react";
import { TileType } from "../types";

type ToolButtonProps = {
  iconUrl: string;
  label: string;
  width: number;
  type: TileType;
  disable?: boolean;
  onClickHandler: (newType: TileType) => void;
};

function ToolButton(props: ToolButtonProps) {
  const { iconUrl, label, width, type, disable, onClickHandler } = props;

  const handleButtonClick = () => {
    onClickHandler(type);
  };

  return (
    <button
      className="flex flex-col justify-center mb-3 min-w-full hover:bg-yellow-200"
      onClick={handleButtonClick}
      disabled={disable}
    >
      <img className="m-auto" src={iconUrl} alt={label} width={width} />
      <span className="m-auto text-lg">{label}</span>
    </button>
  );
}

export default ToolButton;
