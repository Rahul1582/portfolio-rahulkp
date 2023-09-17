import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import TechStackCard from "../../components/techStackCard/techStackCard";
import angular from "../../assets/icons/angular.svg";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";

export default function About() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <TechStackCard imagepath={angular} />
        <TechStackCard imagepath={react} />
        <TechStackCard imagepath={js} />
        <TechStackCard imagepath={typescript} />
        <TechStackCard imagepath={node} />
        <TechStackCard imagepath={mongo} />
      </SimpleGrid>
    </Box>
  );
}
