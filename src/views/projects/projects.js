import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import react from "../../assets/icons/react.svg";

export default function Projects() {
  return (
    <Box>
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
