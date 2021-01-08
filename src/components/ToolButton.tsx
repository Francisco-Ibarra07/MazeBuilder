import React from "react";
import { TileType } from "../types";
import { Flex, Image, Text } from "@chakra-ui/react";

type ToolButtonProps = {
  iconSrc: string;
  label: string;
  boxSize: string;
  fontSize: string;
  hoverColor: string;
  type: TileType;
  isDisabled?: boolean;
  isActive?: boolean;
  onClickHandler: (newType: TileType) => void;
};

function ToolButton(props: ToolButtonProps) {
  const handleClick = () => {
    props.onClickHandler(props.type);
  };

  return (
    <Flex
      as="button"
      mx={5}
      cursor={props.isDisabled ? "not-allowed" : ""}
      bg={props.isDisabled ? "#e5e5e5" : ""}
      border={props.isActive && !props.isDisabled ? "4px solid #4ADE80" : ""}
      borderRadius="md"
      _hover={{ bg: props.hoverColor }}
      _focus={{ outline: "none" }}
      onClick={handleClick}
      flexDirection="column"
      alignItems="center"
    >
      <Image src={props.iconSrc} alt={props.label} boxSize={props.boxSize} />
      <Text fontSize={props.fontSize}>{props.label}</Text>
    </Flex>
  );
}

export default ToolButton;
