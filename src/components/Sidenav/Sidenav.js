import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Content from "./Content";

export default function Sidenav(props) {
  const { routes } = props;
  let activeColor = useColorModeValue("gray.700", "white");
  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  // Chakra Color Mode
  let sidenavBg = useColorModeValue("white", "navyBlue.300");

  return (
    <Box display={{ xl: "block" }} w="100%" position="fixed" minH="100%">
      <Box
        bg={sidenavBg}
        transition={variantChange}
        w="300px"
        h="100vh"
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Flex
          direction="column"
          height="100%"
          pt="25px"
          px="15px"
          borderRadius="30px"
        >
          <Flex align="center" direction="column" fontSize="20px">
            <Text fontSize="20px" color={activeColor}>
              RAHUL'S PORTFOLIO
            </Text>
            <Flex
              h="4px"
              w="100%"
              bg="rgba(135, 140, 189, 0.3)"
              mt="20px"
            ></Flex>
          </Flex>

          <Stack direction="column" mb="50px" mt="100px">
            <Box ps="15px" pe={{ md: "16px", "2xl": "1px" }}>
              <Content routes={routes} />
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
