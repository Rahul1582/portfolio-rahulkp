import React from "react";
import {
  Flex,
  Box,
  useColorModeValue,
  Link,
  IconButton,
  useColorMode
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import routes from "../../routes.js";
import { SideNavResponsive } from "../Sidenav/Sidenav.js";

export default function Navbar(props) {
  const { displayText } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  let mainText = useColorModeValue("lightblue.100", "lightpeach.100");
  let navbarPosition = "fixed";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(10px)";
  let navbarShadow = "none";
  let navbarBg = useColorModeValue("rgba(244, 247, 254, 0.2)", "");
  // let navbarBorderColor = useColorModeValue("navy.700", "white");
  let secondaryMargin = "0px";
  let paddingX = "15px";
  let gap = "0px";

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      alignItems={{ xl: "center" }}
      justifyContent={{ xl: "center" }}
      display={"flex"}
      lineHeight="20px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
      px={{
        sm: paddingX,
        md: "10px"
      }}
      ps={{
        base: "12px",
        xl: "12px"
      }}
      top="0px"
      w={{
        base: "100%",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 350px)",
        "2xl": "calc(100vw - 365px)"
      }}
      zIndex="99"
    >
      <Flex
        w="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb={gap}
        pt="20px"
        ps={{
          base: "12px"
        }}
      >
        <Box>
          <Link
            color={mainText}
            bg="inherit"
            borderRadius="inherit"
            fontSize={{
              base: "1.5em",
              xl: "2.5em"
            }}
            _hover={{ color: { mainText } }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent"
            }}
            _focus={{
              boxShadow: "none"
            }}
            // borderBottom="2px solid"
            // borderColor={navbarBorderColor}
          >
            {displayText}
          </Link>
        </Box>
        <Box>
          <Flex direction="row" alignItems="center" justifyContent="center">
            <SideNavResponsive routes={routes} />
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
