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
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Skeleton
} from "@chakra-ui/react";
import { React, useState, useRef } from "react";
import { IoMenuOutline } from "react-icons/io5";
import GitHubButton from "react-github-btn";
import Content from "./Content";
import sidenavDark from "../../assets/sidenavDark.png";
import sidenavLight from "../../assets/sidenavLight.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Sidenav(props) {
  const [loadedSidenavimg, setloadedSidenavimg] = useState(false);
  const { colorMode } = useColorMode();
  const { routes } = props;
  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)"
  );
  // Chakra Color Mode
  // let sidenavBg = useColorModeValue("secondaryGray.400", "navyBlue.300");
  // let navbarBorderColor = useColorModeValue("lightblue.100", "lightpeach.100");

  return (
    <Box
      display={{ xs: "none", sm: "none", xl: "block" }}
      w="100%"
      position="fixed"
      minH="100%"
    >
      <Box
        // bg={sidenavBg}
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
            <Skeleton
              isLoaded={loadedSidenavimg}
              color="white"
              fadeDuration={1}
              width={"100%"}
              height={"100%"}
            >
              <LazyLoadImage
                src={colorMode === "light" ? sidenavLight : sidenavDark}
                effect="blur"
                onLoad={() => setloadedSidenavimg(true)}
              ></LazyLoadImage>
            </Skeleton>
          </Flex>

          <Stack direction="column" mb="30px" mt="20px">
            <Box ps="15px" pe={{ md: "16px", "2xl": "1px" }}>
              <Content routes={routes} />
            </Box>
          </Stack>
          <Flex
            align="center"
            direction="row"
            fontSize="20px"
            gap="20px"
            justifyContent="center"
            alignItems="center"
          >
            <GitHubButton
              href="https://github.com/Rahul1582/portfolio-rahulkp"
              data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;"
              data-icon="octicon-star"
              data-size="large"
              aria-label="Star Rahul1582/portfolio-rahulkp on GitHub"
            >
              Star
            </GitHubButton>

            <GitHubButton
              href="https://github.com/Rahul1582/portfolio-rahulkp/fork"
              data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;"
              data-icon="octicon-repo-forked"
              data-size="large"
              aria-label="Fork Rahul1582/portfolio-rahulkp on GitHub"
            >
              Fork
            </GitHubButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export function SideNavResponsive(props) {
  const { colorMode } = useColorMode();
  let sidenavBg = useColorModeValue("white", "navyBlue.300");
  let navbarBorderColor = useColorModeValue("lightblue.100", "lightpeach.100");
  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)"
  );
  const [loadedSidenavimg, setloadedSidenavimg] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

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
        placement="top"
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
          <DrawerBody maxW="300px" px="0rem" pb="0" overflow="hidden">
            <Box
              bg={sidenavBg}
              transition={variantChange}
              w="300px"
              h="100vh"
              minH="100%"
              overflowX="hidden"
              boxShadow={shadow}
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
                  <Skeleton
                    isLoaded={loadedSidenavimg}
                    color="white"
                    fadeDuration={1}
                    width={"100%"}
                    height={"100%"}
                  >
                    <LazyLoadImage
                      src={colorMode === "light" ? sidenavLight : sidenavDark}
                      effect="blur"
                      onLoad={() => setloadedSidenavimg(true)}
                    ></LazyLoadImage>
                  </Skeleton>
                </Flex>

                <Stack direction="column" mb="30px" mt="20px">
                  <Box
                    ps={{ sm: "0px", "2xl": "15px" }}
                    pe={{ md: "16px", "2xl": "1px" }}
                  >
                    <Content routes={routes} />
                  </Box>
                </Stack>
                <Flex
                  align="center"
                  direction="row"
                  fontSize="20px"
                  gap="20px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <GitHubButton
                    href="https://github.com/Rahul1582/portfolio-rahulkp"
                    data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;"
                    data-icon="octicon-star"
                    data-size="large"
                    aria-label="Star Rahul1582/portfolio-rahulkp on GitHub"
                  >
                    Star
                  </GitHubButton>

                  <GitHubButton
                    href="https://github.com/Rahul1582/portfolio-rahulkp/fork"
                    data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;"
                    data-icon="octicon-repo-forked"
                    data-size="large"
                    aria-label="Fork Rahul1582/portfolio-rahulkp on GitHub"
                  >
                    Fork
                  </GitHubButton>
                </Flex>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
