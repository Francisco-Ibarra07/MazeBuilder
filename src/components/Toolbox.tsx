import React from "react";
// import { TileType } from "../types";
import { connect, ConnectedProps } from "react-redux";
// import { changeTool } from "../store/actions/tooltipActions";
import ToolButton from "./ToolButton";

const connector = connect();
type PropsFromRedux = ConnectedProps<typeof connector>;

type TooltipProps = PropsFromRedux;

function Toolbox(props: TooltipProps) {
  // const { dispatch } = props;
  // const handleClick = () => {
  //   // TODO: change val based on what is click on
  //   dispatch(changeTool(TileType.BLOCKADE));
  //   console.log("Changed tool");
  // }

  return (
    <div className="bg-yellow-300 rounded-r-3xl px-4 my-20 flex flex-col justify-center max-h-full">
      <ToolButton
        iconUrl="https://cdn4.iconfinder.com/data/icons/transportation-solid-style/24/road-256.png"
        label="Road"
        width={60}
      />
      <ToolButton
        iconUrl="https://cdn4.iconfinder.com/data/icons/objects-1-3/50/82-256.png"
        label="Roadblock"
        width={60}
      />
      <ToolButton
        iconUrl="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Pin_Flag-256.png"
        label="Flag"
        width={60}
      />
      <ToolButton
        iconUrl="https://cdn3.iconfinder.com/data/icons/education-801/64/Eraser-Remove-Paper-Pencil-256.png"
        label="Erase"
        width={60}
      />
    </div>
  );
}

export default connector(Toolbox);
