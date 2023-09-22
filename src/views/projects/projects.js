import React from "react";
import { Box, SimpleGrid, Flex } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import nftproject from "../../assets/projects/nft_blockchain_500x300.jpg";
import medhub from "../../assets/projects/medhub_500x300.jpg";
import collab from "../../assets/projects/lets_collab_img3.jpg";
import blog from "../../assets/projects/bloggers.jpg";
import eeg from "../../assets/projects/eeg_500x300.jpg";
import mtrans from "../../assets/projects/mt_500x300.jpg";

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
          projectLiveLink="https://flipkart-grid-frontend.vercel.app/"
          projectLink="https://github.com/Rahul1582/NFT-Based-E-Commerce-Website"
        />
        <ProjectCard
          projectImage={collab}
          projectName={"LET'S COLLAB"}
          aboutProject={"A Realtime Chatting Application"}
          techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
          projectLiveLink="https://lets-collab.vercel.app/"
          projectLink="https://github.com/Rahul1582/Lets_Collab"
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
          projectLiveLink="https://medhub-360.vercel.app/"
          projectLink="https://github.com/Rahul1582/MedHub_360"
        />
        <ProjectCard
          projectImage={blog}
          projectName={"Bloggers Arena"}
          aboutProject={"A Blogging Website with User Authentication"}
          techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
          projectLiveLink="https://bloggers-arena.vercel.app/"
          projectLink="https://github.com/Rahul1582/Bloggers-Arena"
        />
        <ProjectCard
          projectImage={eeg}
          projectName={"Emotion Recognition from Psychological Signals"}
          aboutProject={
            "Detection of Human Emotions from EEG signals using the AMIGOS Dataset"
          }
          techStack={
            "PYTORCH, CNN, SVC, PYTHON, FOURIER AND WAVELET TRANSFORMATIONS, STFT, ENTROPY, FEATURE FUSION"
          }
          projectLink="https://github.com/Rahul1582/Emotion-Recognition-from-Psychological-Signals"
        />
        <ProjectCard
          projectImage={mtrans}
          projectName={"Machine Translation"}
          aboutProject={
            "Translated Texts With The Help Of Encoder- Decoder LSTM Model And Attention Mechanism"
          }
          techStack={"LSTM, ENCODER-DECODER, ATTENTION MECHANISM"}
          projectLink="https://github.com/Rahul1582/Bloggers-Arena"
        />
      </SimpleGrid>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt="40px"
        mb="40px"
      >
        <TypeAnimation
          sequence={["BLOGS"]}
          style={{ fontSize: "3em" }}
          cursor={false}
        />
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap="50px"
        alignItems="center"
        justifyContent="center"
      >
        <ProjectCard
          projectImage={eeg}
          projectName={"Emotion Recognition from Psychological Signals"}
          aboutProject={
            "Detection of Human Emotions from EEG signals using the AMIGOS Dataset"
          }
          techStack={
            "PYTORCH, CNN, SVC, PYTHON, FOURIER AND WAVELET TRANSFORMATIONS, STFT, ENTROPY, FEATURE FUSION"
          }
          projectLink="https://github.com/Rahul1582/Emotion-Recognition-from-Psychological-Signals"
        />
        <ProjectCard
          projectImage={mtrans}
          projectName={"Machine Translation"}
          aboutProject={
            "Translated Texts With The Help Of Encoder- Decoder LSTM Model And Attention Mechanism"
          }
          techStack={"LSTM, ENCODER-DECODER, ATTENTION MECHANISM"}
          projectLink="https://github.com/Rahul1582/Bloggers-Arena"
        />
      </SimpleGrid>
    </Box>
  );
}