import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Stack,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import Content from "./Content";
import sidenav from "../../assets/dashboard.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Sidenav(props) {
  const { routes } = props;
  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  // Chakra Color Mode
  let sidenavBg = useColorModeValue("secondaryGray.400", "navyBlue.300");
  let navbarBorderColor = useColorModeValue("lightblue.100", "lightgreen.100");

  return (
    <Box
      display={{ xs: "none", sm: "none", xl: "block" }}
      w="100%"
      position="fixed"
      minH="100%"
    >
      <Box
        bg={sidenavBg}
        transition={variantChange}
        w="300px"
        h="100vh"
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
        borderRight="2px solid"
        borderColor={navbarBorderColor}
      >
        <Flex
          direction="column"
          height="100%"
          pt="25px"
          px="15px"
          borderRadius="30px"
        >
          <Flex align="center" direction="column" fontSize="20px">
            <LazyLoadImage src={sidenav} effect="blur"></LazyLoadImage>
          </Flex>

          <Stack direction="column" mb="50px" mt="20px">
            <Box ps="15px" pe={{ md: "16px", "2xl": "1px" }}>
              <Content routes={routes} />
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}

export function SideNavResponsive(props) {
  let sidenavBg = useColorModeValue("white", "navyBlue.300");
  let navbarBorderColor = useColorModeValue("lightblue.100", "lightgreen.100");
  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  const { routes } = props;

  return (
    <Flex display={{ sm: "flex", xl: "none" }} alignItems="center">
      <Flex ref={btnRef} w="max-content" h="max-content" onClick={onOpen}>
        <Icon
          as={IoMenuOutline}
          color={navbarBorderColor}
          my="auto"
          w="20px"
          h="20px"
          me="10px"
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === "rtl" ? "right" : "left"}
        finalFocusRef={btnRef}
        zIndex="9999"
      >
        <DrawerOverlay />
        <DrawerContent w="300px" maxW="300px" bg={sidenavBg}>
          <DrawerCloseButton
            zIndex="3"
            onClose={onClose}
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody maxW="300px" px="0rem" pb="0">
            <Box
              bg={sidenavBg}
              transition={variantChange}
              w="300px"
              h="100vh"
              minH="100%"
              overflowX="hidden"
              boxShadow={shadow}
              borderRight="2px solid"
              borderColor={navbarBorderColor}
              zIndex="9999"
            >
              <Flex
                direction="column"
                height="100%"
                pt="25px"
                px="15px"
                borderRadius="30px"
              >
                <Flex align="center" direction="column" fontSize="20px">
                  <LazyLoadImage src={sidenav} effect="blur"></LazyLoadImage>
                </Flex>

                <Stack direction="column" mb="50px" mt="20px">
                  <Box
                    ps={{ sm: "0px", "2xl": "15px" }}
                    pe={{ md: "16px", "2xl": "1px" }}
                  >
                    <Content routes={routes} />
                  </Box>
                </Stack>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
