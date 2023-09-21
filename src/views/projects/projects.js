import React from "react";
import { Box, SimpleGrid, Flex } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import nftproject from "../../assets/projects/nft_blockchain_500x300.jpg";
import medhub from "../../assets/projects/medhub_500x300.jpg";
import collab from "../../assets/projects/lets_collab_img3.jpg";

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
        gap="25px"
        alignItems="center"
        justifyContent="center"
      >
        <ProjectCard
          projectImage={nftproject}
          projectName={"NFT Based E-Commerce Website"}
          aboutProject={"Blockchain based warranty using NFT"}
          techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB, SOLIDITY"}
        />
        <ProjectCard
          projectImage={collab}
          projectName={"LET'S COLLAB"}
          aboutProject={"A Realtime Chatting Application"}
          techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
        />
        <ProjectCard
          projectImage={medhub}
          projectName={"MedHub-360"}
          aboutProject={
            "An Advanced Medical-Healthcare Application To Analyse Medical Reports For Patients And Doctors"
          }
          techStack={
            "JAVASCRIPT, PYTHON, NODE JS, MONGODB, HTML, BOOTSTRAP, CSS,TESSERACT-OCR, FLASK"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
