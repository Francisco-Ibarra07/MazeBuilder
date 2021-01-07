import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";

function Heading() {
  return (
    <Box bg="blue.300" p={4} borderColor="blue.300" borderBottom="1px">
      <Box display="flex" justifyContent="space-between">
        {/* Image + Name */}
        <Box display="flex">
          <Image
            src="https://lh6.googleusercontent.com/FI-VrYVCsSLDa1SWxWGZxQPbeaZZojxAW--6vk3tZxoXUQq9NXsPJXako_JVXAbk0nGmpQw9LtnO2uYnU-5SUpP1wrMYqjSBYWeJld42FRowXWv0-ZyV-65QuXaRkJVA77IEsZIz"
            alt="Francisco"
            w="60px"
            mr={3}
          />
          <Text
            color="white"
            fontSize="2xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Francisco Ibarra
          </Text>
        </Box>
        {/* Project title */}
        <Box display="flex" alignItems="center" justifyContent="center">
          <Text color="white" fontSize="2xl">
            Maze Builder
          </Text>
        </Box>
        {/* Media links */}
        <Box display="flex" alignItems="center">
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
        </Box>
      </Box>
    </Box>
  );
}

export default Heading;
