import React from "react";
import { Box, Flex, Image, Link, Text, Spacer } from "@chakra-ui/react";

function TopHeading() {
  return (
    <Box bg="blue.400" p={4} borderColor="blue.300" borderBottom="1px">
      <Flex justifyContent="space-between">
        {/* Image + Name */}
        <Flex>
          <Image
            src="https://lh6.googleusercontent.com/FI-VrYVCsSLDa1SWxWGZxQPbeaZZojxAW--6vk3tZxoXUQq9NXsPJXako_JVXAbk0nGmpQw9LtnO2uYnU-5SUpP1wrMYqjSBYWeJld42FRowXWv0-ZyV-65QuXaRkJVA77IEsZIz"
            alt="Francisco"
            w="60px"
            mr={3}
          />
          <Flex alignItems="center" justifyContent="center">
            <Text color="white" fontSize="2xl">
              Francisco Ibarra
            </Text>
          </Flex>
        </Flex>
        {/* Project title */}
        <Flex alignItems="center" justifyContent="center">
          <Text color="white" fontSize="2xl">
            Maze Builder
          </Text>
        </Flex>
        {/* Media links */}
        <Flex alignItems="center">
          <Link href="https://linkedin.com/in/franciscoibarra/" isExternal>
            <Image
              src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn-256.png"
              alt="linkedin"
              boxSize="35px"
              mr={3}
            />
          </Link>
          <Link href="https://github.com/Francisco-Ibarra07" isExternal>
            <Image
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png"
              alt="github"
              boxSize="30px"
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default TopHeading;
