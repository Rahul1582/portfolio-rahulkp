import React from "react";
import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

export default function Content(props) {
  const { routes } = props;
  let currentlocation = useLocation();
  let activeColor = useColorModeValue("gray.700", "white");

  let activeIcon = useColorModeValue("gray.700", "white");
  let textColor = useColorModeValue("lightblue.100", "lightpeach.100");

  const activeRoute = (routeName) => {
    return currentlocation.pathname.includes(routeName);
  };

  return routes.map((route, index) => {
    return (
      <NavLink key={index} to={route.path}>
        <Box>
          <HStack
            spacing={activeRoute(route.path.toLowerCase()) ? "22px" : "26px"}
            py="14px"
            border={
              activeRoute(route.path.toLowerCase()) ? "3px solid" : "none"
            }
          >
            <Flex
              w="100%"
              alignItems="center"
              justifyContent="start"
              textAlign="center"
              ps="20px"
            >
              <Box
                color={
                  activeRoute(route.path.toLowerCase()) ? activeIcon : textColor
                }
                me="18px"
                textAlign="center"
              >
                {route.icon}
              </Box>
              <Box
                fontSize="18px"
                textAlign="center"
                cursor="pointer"
                color={
                  activeRoute(route.path.toLowerCase())
                    ? activeColor
                    : textColor
                }

                //   fontWeight={
                //   activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                // }
              >
                {route.name}
              </Box>
            </Flex>
            {/* <Box
              h="36px"
              w="4px"
              bg={
                activeRoute(route.path.toLowerCase())
                  ? brandColor
                  : "transparent"
              }
              borderRadius="5px"
            /> */}
          </HStack>
        </Box>
      </NavLink>
    );
  });
}
