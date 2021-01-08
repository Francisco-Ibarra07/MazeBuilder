import React, { useState } from "react";
import { TileType } from "../types";
import ToolButton from "./ToolButton";
import { Flex, Text } from "@chakra-ui/react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { changeTool } from "../store/actions/tooltipActions";
import pathIcon from "../resources/icons/path-icon.png";
import flagIcon from "../resources/icons/flag-icon.png";
import eraserIcon from "../resources/icons/eraser-icon.png";
import roadblockIcon from "../resources/icons/roadblock-icon.png";

const mapStateToProps = (state: RootState) => ({
  flagLocations: state.flagLocations,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type TooltipProps = PropsFromRedux;

function ToolBox(props: TooltipProps) {
  const { dispatch, flagLocations } = props;
  const [activeTool, setActiveTool] = useState<TileType>(TileType.ROAD);

  const handleToolClick = (newType: TileType) => {
    if (newType !== activeTool) {
      dispatch(changeTool(newType));
      setActiveTool(newType);
    }
  };

  return (
    <Flex
      w={3 / 4}
      h="150px"
      roundedTop="md"
      boxShadow="md"
      borderWidth="2px"
      borderColor="blue.300"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="lg">Tools</Text>
      <Flex w={3 / 4} h="100%" justifyContent="center" alignItems="center">
        <ToolButton
          iconSrc={pathIcon}
          label="Path"
          boxSize="70px"
          fontSize="xl"
          hoverColor="blue.200"
          type={TileType.ROAD}
          isActive={activeTool === TileType.ROAD}
          onClickHandler={handleToolClick}
        />
        <ToolButton
          iconSrc={roadblockIcon}
          label="Block"
          boxSize="70px"
          fontSize="xl"
          hoverColor="blue.200"
          type={TileType.ROADBLOCK}
          isActive={activeTool === TileType.ROADBLOCK}
          onClickHandler={handleToolClick}
        />
        <ToolButton
          iconSrc={flagIcon}
          label="Flag"
          boxSize="70px"
          fontSize="xl"
          hoverColor="blue.200"
          type={TileType.FLAG}
          isDisabled={flagLocations.length === 2}
          isActive={activeTool === TileType.FLAG}
          onClickHandler={handleToolClick}
        />
        <ToolButton
          iconSrc={eraserIcon}
          label="Erase"
          boxSize="70px"
          fontSize="xl"
          hoverColor="blue.200"
          type={TileType.BLOCKADE}
          isActive={activeTool === TileType.BLOCKADE}
          onClickHandler={handleToolClick}
        />
      </Flex>
    </Flex>
  );
}

export default connector(ToolBox);
