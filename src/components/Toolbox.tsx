import React, { useState } from "react";
import { TileType } from "../types";
import ToolButton from "./ToolButton";
import { connect, ConnectedProps } from "react-redux";
import { changeTool } from "../store/actions/tooltipActions";
import { RootState } from "../store/reducers/rootReducer";

const mapStateToProps = (state: RootState) => ({
  flagLocations: state.flagLocations,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type TooltipProps = PropsFromRedux;

function Toolbox(props: TooltipProps) {
  const { dispatch, flagLocations } = props;
  const [activeTool, setActiveTool] = useState<TileType>(TileType.ROAD);

  const handleToolClick = (newType: TileType) => {
    if (newType !== activeTool) {
      dispatch(changeTool(newType));
      setActiveTool(newType);
    }
  };

  return (
    <div className="bg-yellow-300 rounded-r-3xl px-4 my-20 flex flex-col justify-center max-h-full">
      <ToolButton
        iconUrl="https://cdn4.iconfinder.com/data/icons/transportation-solid-style/24/road-256.png"
        label="Road"
        width={60}
        type={TileType.ROAD}
        onClickHandler={handleToolClick}
        isActive={TileType.ROAD === activeTool}
      />
      <ToolButton
        iconUrl="https://cdn4.iconfinder.com/data/icons/objects-1-3/50/82-256.png"
        label="Roadblock"
        width={60}
        type={TileType.ROADBLOCK}
        onClickHandler={handleToolClick}
        isActive={TileType.ROADBLOCK === activeTool}
      />
      <ToolButton
        iconUrl="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Pin_Flag-256.png"
        label="Flag"
        width={60}
        type={TileType.FLAG}
        onClickHandler={handleToolClick}
        isDisabled={flagLocations.length === 2}
        isActive={TileType.FLAG === activeTool}
      />
      <ToolButton
        iconUrl="https://cdn3.iconfinder.com/data/icons/education-801/64/Eraser-Remove-Paper-Pencil-256.png"
        label="Erase"
        width={60}
        type={TileType.BLOCKADE}
        onClickHandler={handleToolClick}
        isActive={TileType.BLOCKADE === activeTool}
      />
    </div>
  );
}

export default connector(Toolbox);
