import React from "react";
import { TypeAnimation } from "react-type-animation";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import { Box, useStyleConfig, Flex } from "@chakra-ui/react";

export default function Resume() {
  const styles = useStyleConfig("Card");
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };
  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt="20px">
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt="40px"
          mb="20px"
        ></Flex>
        <Flex justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            width={{ base: "100%", md: "70%", xl: "70%" }}
            height={{ base: "60vh", md: "100vh", xl: "150vh" }}
            overflow="hidden"
            borderRadius="md"
          >
            <iframe
              src="https://drive.google.com/file/d/143ZCD6FQKXtLn6H42kBR1p6geZjsU6fQ/preview"
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: "5px solid" }}
            ></iframe>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
