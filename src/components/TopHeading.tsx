import React from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import avatarIcon from "../resources/icons/avatar-icon.png";
import linkedinIcon from "../resources/icons/linkedin-icon.png";
import githubIcon from "../resources/icons/github-icon.png";

function TopHeading() {
  // const widthSize = "232px";
  return (
    <Box bg="blue.400" p={4} borderColor="blue.300" borderBottom="1px">
      <Flex justifyContent="space-between">
        {/* Image + Name */}
        <Flex>
          <Image src={avatarIcon} alt="Francisco" boxSize="60px" mr={3} />
          <Flex alignItems="center" justifyContent="center">
            <Text color="white" fontSize="2xl">
              Francisco Ibarra
            </Text>
          </Flex>
        </Flex>

        {/* Project title */}
        <Flex alignItems="center" justifyContent="center">
          <Text color="white" fontSize="4xl">
            Maze Builder
          </Text>
        </Flex>

        {/* Media links */}
        <Flex alignItems="center" justifyContent="end">
          <Link href="https://linkedin.com/in/franciscoibarra/" isExternal>
            <Image src={linkedinIcon} alt="linkedin" boxSize="40px" mr={3} />
          </Link>
          <Link href="https://github.com/Francisco-Ibarra07" isExternal>
            <Image src={githubIcon} alt="github" boxSize="35px" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default TopHeading;
