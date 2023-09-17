import React from "react";
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import DashboardCard from "../../components/dashboardCard/dashboardCard";
import angular from "../../assets/icons/angular.svg";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";

export default function Dashboard() {
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <DashboardCard imagepath={angular} />
        <DashboardCard imagepath={react} />
        <DashboardCard imagepath={js} />
        <DashboardCard imagepath={typescript} />
        <DashboardCard imagepath={node} />
        <DashboardCard imagepath={mongo} />
      </SimpleGrid>
    </Box>
  );
}
