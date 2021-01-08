import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ToolButton from "./ToolButton";
import { TileType } from "../types";
import pathIcon from "../resources/icons/path-icon.png";
import flagIcon from "../resources/icons/flag-icon.png";
import eraserIcon from "../resources/icons/eraser-icon.png";
import roadblockIcon from "../resources/icons/roadblock-icon.png";

function ToolBox() {
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
        />
        <ToolButton
          iconSrc={roadblockIcon}
          label="Block"
          boxSize="70px"
          fontSize="xl"
          hoverColor="blue.200"
          type={TileType.ROADBLOCK}
        />
        <ToolButton
          iconSrc={flagIcon}
          label="Flag"
          boxSize="70px"
          fontSize="xl"
          hoverColor="blue.200"
          type={TileType.FLAG}
        />
        <ToolButton
          iconSrc={eraserIcon}
          label="Erase"
          boxSize="70px"
          fontSize="xl"
          hoverColor="blue.200"
          type={TileType.BLOCKADE}
        />
      </Flex>
    </Flex>
  );
}

export default ToolBox;
