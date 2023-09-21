import React from "react";
import { Box, SimpleGrid, Flex } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import react from "../../assets/icons/react.svg";

export default function Projects() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        mb="40px"
      >
        <TypeAnimation
          sequence={[
            "PROJECTS",
            500,
            "PROJECTS AND BLOGS",
            500,
            "PROJECTS",
            500,
            "PROJECTS AND BLOGS",
            500
          ]}
          style={{ fontSize: "3em" }}
          cursor={false}
        />
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap="20px"
        alignItems="center"
        justifyContent="center"
      >
        <ProjectCard image={react} name={"React Project"} />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </SimpleGrid>
    </Box>
  );
}
