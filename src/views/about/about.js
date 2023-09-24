import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Image
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import angular from "../../assets/icons/angular.svg";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import gitlab from "../../assets/icons/gitlab.svg";
import cpp from "../../assets/icons/c++.png";
import express from "../../assets/icons/express.svg";
import myphoto from "../../assets/aboutMePhoto.jpg";

export default function About() {
  const styles = useStyleConfig("Card");

  const getActiveRoute = (routes) => {
    console.log(window.location.href);
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          {/* <TypeAnimation
            sequence={["ABOUT ME", 500, "ABOUT", 500, "ABOUT ME", 500]}
            style={{ fontSize: "3em" }}
            cursor={false}
          /> */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr"
            }}
            templateRows={{
              base: "repeat(2, 1fr)",
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box __css={styles}>
              {" "}
              <Image
                src={myphoto}
                w={{ base: "100%", "3xl": "100%" }}
                h={{ base: "100%", "3xl": "250px" }}
                borderRadius="20px"
                p="20px"
                // border="1px dotted white"
              />
            </Box>
            <Box __css={styles}>hfhf</Box>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="start"
          alignItems="start"
          mb="40px"
        >
          <TypeAnimation
            sequence={[
              "MY",
              500,
              "MY SKILLSET",
              500,
              "MY",
              500,
              "MY SKILLSET",
              500
            ]}
            style={{ fontSize: "3em" }}
            cursor={false}
          />
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <TechStackCard imagepath={angular} />
          <TechStackCard imagepath={react} />
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={typescript} />
          <TechStackCard imagepath={cpp} />
          <TechStackCard imagepath={node} />
          <TechStackCard imagepath={mongo} />
          <TechStackCard imagepath={express} />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={gitlab} />
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
