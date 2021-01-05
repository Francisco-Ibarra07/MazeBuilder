import React from "react";
import { TileType } from "../types";

type ToolButtonProps = {
  iconUrl: string;
  label: string;
  width: number;
  type: TileType;
  isDisabled?: boolean;
  isActive?: boolean;
  onClickHandler: (newType: TileType) => void;
};

function ToolButton(props: ToolButtonProps) {
  const { iconUrl, label, width, type, isDisabled, isActive, onClickHandler } = props;

  const handleButtonClick = () => {
    onClickHandler(type);
  };

  const styles = {
    button: {
      border: isActive && !isDisabled ? "2px solid #4ADE80" : "",
      backgroundColor: isDisabled ? "#e5e5e5" : "",
      cursor: isDisabled ? "not-allowed" : "",
    },
  };

  return (
    <button
      className="flex flex-col justify-center my-2 min-w-full hover:bg-yellow-200 focus:outline-none"
      onClick={handleButtonClick}
      style={styles.button}
    >
      <img className="m-auto" src={iconUrl} alt={label} width={width} />
      <span className="m-auto text-lg">{label}</span>
    </button>
  );
}

export default ToolButton;
