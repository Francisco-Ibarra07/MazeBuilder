import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

function SubHeading() {
  return (
    <Flex bg="blue.100" flexDirection="column" alignItems="center" justifyContent="center">
      <Heading mt={4}>Play around and create custom mazes</Heading>
      <Text fontSize="lg">Create a path, place down 2 flag points, and hit solve!</Text>
    </Flex>
  );
}

export default SubHeading;
