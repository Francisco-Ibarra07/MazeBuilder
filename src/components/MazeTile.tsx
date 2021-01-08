import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { Location, TileType } from "../types";
import markerIcon from "../resources/icons/marker-icon.png";
import flagIcon from "../resources/icons/flag-icon.png";

type MazeTileProps = {
  type: TileType;
  location: Location;
  showBorders?: boolean;
  onClickHandler: (type: TileType, location: Location) => void;
  onMouseOverHandler: (type: TileType, location: Location) => void;
};

function MazeTile(props: MazeTileProps) {
  const handleClick = () => {
    props.onClickHandler(props.type, props.location);
  };

  const handleMouseOver = () => {
    props.onMouseOverHandler(props.type, props.location);
  };

  let tileColor = "";
  switch (props.type) {
    case TileType.ROAD:
      tileColor = "green.400";
      break;
    case TileType.BLOCKADE:
      tileColor = "blue.400";
      break;
    case TileType.FLAG:
      tileColor = "purple.400";
      break;
    case TileType.ROADBLOCK:
      tileColor = "orange.400";
      break;
    case TileType.ISPATH:
      tileColor = "green.600";
      break;
  }

  let border = props.showBorders ? "2px" : "";

  return (
    <Flex
      as="button"
      bg={tileColor}
      borderWidth={border}
      _hover={{ opacity: 0.3 }}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      justifyContent="center"
      alignItems="center"
    >
      {props.type === TileType.ISPATH && <Image src={markerIcon} alt="ispath" boxSize="50px" />}
      {props.type === TileType.FLAG && <Image src={flagIcon} alt="flag" boxSize="50px" />}
    </Flex>
  );
}

export default MazeTile;
