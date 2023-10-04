import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import dashboardimg from "../../assets/dashboard.avif";

export default function Dashboard() {
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  const images = [
    dashboardimg,
    dashboardimg,
    dashboardimg,
    dashboardimg,
    dashboardimg,
    dashboardimg
    // Add more image URLs here
  ];
  const totalItems = images.length;
  const angle = (2 * Math.PI) / totalItems;
  const circleRadius = 350;

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        {/* <img src={dashboardimg} /> */}
        {/* <Flex align="center" justify="center" height="400px">
        <Box
          w="500px" // Adjust the size of the circle as needed
          h="500px"
          borderRadius="50%" // Makes it a circle
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          position="relative"
          animation={`rotation ${10}s linear infinite`}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              width="150px" // Adjust the size of each image as needed
              height="150px"
              borderRadius="50%" // Makes it a circle
              backgroundImage={`url(${image})`}
              backgroundSize="cover"
              boxShadow="0px 0px 5px rgba(0, 0, 0, 0.3)" // Add shadow for images
              position="absolute"
              top={`calc(50% - ${circleRadius * Math.sin(angle * index)}px)`}
              left={`calc(40% + ${circleRadius * Math.cos(angle * index)}px)`}
              border="2px solid white"
            ></Box>
          ))}
          HI, THIS IS RAHUL KUMAR PATRO
        </Box>
      </Flex> */}
      </Box>
    </Box>
  );
}
