import React from "react";
import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

export default function Content(props) {
  const { routes } = props;
  let currentlocation = useLocation();
  let activeColor = useColorModeValue("gray.700", "lightgreen.100");

  let activeIcon = useColorModeValue("brand.400", "lightgreen.100");
  let textColor = useColorModeValue("secondaryGray.500", "lightgreen.100");
  let brandColor = useColorModeValue("brand.400", "lightgreen.100");

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
          >
            <Flex w="100%" alignItems="center" justifyContent="center">
              <Box
                color={
                  activeRoute(route.path.toLowerCase()) ? activeIcon : textColor
                }
                me="18px"
              >
                {route.icon}
              </Box>
              <Text
                me="auto"
                fontSize="20px"
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
              </Text>
            </Flex>
            <Box
              h="36px"
              w="4px"
              bg={
                activeRoute(route.path.toLowerCase())
                  ? brandColor
                  : "transparent"
              }
              borderRadius="5px"
            />
          </HStack>
        </Box>
      </NavLink>
    );
  });
}
