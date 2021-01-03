import React from "react";
import { TileType } from "../types";
import ToolButton from "./ToolButton";
import { connect, ConnectedProps } from "react-redux";
import { changeTool } from "../store/actions/tooltipActions";

const connector = connect();
type PropsFromRedux = ConnectedProps<typeof connector>;

type TooltipProps = PropsFromRedux;

function Toolbox(props: TooltipProps) {
  const { dispatch } = props;
  const handleToolClick = (newType: TileType) => {
    dispatch(changeTool(newType));
  };

  return (
    <div className="bg-yellow-300 rounded-r-3xl px-4 my-20 flex flex-col justify-center max-h-full">
      <ToolButton
        iconUrl="https://cdn4.iconfinder.com/data/icons/transportation-solid-style/24/road-256.png"
        label="Road"
        width={60}
        type={TileType.ROAD}
        onClickHandler={handleToolClick}
      />
      <ToolButton
        iconUrl="https://cdn4.iconfinder.com/data/icons/objects-1-3/50/82-256.png"
        label="Roadblock"
        width={60}
        type={TileType.ROADBLOCK}
        onClickHandler={handleToolClick}
      />
      <ToolButton
        iconUrl="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Pin_Flag-256.png"
        label="Flag"
        width={60}
        type={TileType.FLAG}
        onClickHandler={handleToolClick}
      />
      <ToolButton
        iconUrl="https://cdn3.iconfinder.com/data/icons/education-801/64/Eraser-Remove-Paper-Pencil-256.png"
        label="Erase"
        width={60}
        type={TileType.BLOCKADE}
        onClickHandler={handleToolClick}
      />
    </div>
  );
}

export default connector(Toolbox);
