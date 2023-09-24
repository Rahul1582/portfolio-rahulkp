import React, { useState, useEffect } from "react";
import { Flex, Box, useColorModeValue, Link } from "@chakra-ui/react";
import routes from "../../routes";

export default function Navbar(props) {
  const { displayText } = props;
  let mainText = useColorModeValue("navy.700", "white");
  let secondaryText = useColorModeValue("gray.700", "white");
  let navbarPosition = "fixed";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(20px)";
  let navbarShadow = "none";
  let navbarBg = useColorModeValue(
    "rgba(244, 247, 254, 0.2)",
    "rgba(11,20,55,0.5)"
  );
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";
  let gap = "0px";

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      alignItems={{ xl: "center" }}
      minH="75px"
      justifyContent={{ xl: "center" }}
      display={"flex"}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
      px={{
        sm: paddingX,
        md: "10px"
      }}
      ps={{
        xl: "12px"
      }}
      pt="8px"
      top={{ base: "12px", md: "16px", lg: "20px", xl: "20px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 350px)",
        "2xl": "calc(100vw - 365px)"
      }}
      zIndex="99999"
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row"
        }}
        alignItems={{ xl: "center" }}
        mb={gap}
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Link
            color={mainText}
            href="#"
            bg="inherit"
            borderRadius="inherit"
            fontSize="34px"
            _hover={{ color: { mainText } }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent"
            }}
            _focus={{
              boxShadow: "none"
            }}
          >
            {displayText}
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
