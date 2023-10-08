import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Image,
  Text,
  useColorModeValue,
  useColorMode,
  Icon
} from "@chakra-ui/react";
import { MdFlightTakeoff } from "react-icons/md";
import { LiaDrumSolid } from "react-icons/lia";
import { GiCricketBat } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
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
import GitHubCalendar from "react-github-calendar";

export default function About() {
  const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("lightblue.100", "lightgreen.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
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
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(5deg)"
                zIndex="-1"
              />

              <Image
                src={myphoto}
                w="100%"
                h="100%"
                objectFit="cover"
                textAlign="center"
              />
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Current Organisation"
                    value="Truminds Software Systems"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Designation"
                    value="Software Development Engineer - 1"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="Bengaluru, Karnataka"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Education"
                    value="BIT Mesra, Ranchi"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="Masters"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value="English, Hindi, Odia"
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY SKILLSET/>"}
          </Text>
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

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY GITHUB CONTRIBUTIONS/>"}
          </Text>
        </Flex>
        <Box display="flex" justifyContent="center" alignItems="center">
          <GitHubCalendar
            username="rahul1582"
            colorScheme={colorMode === "light" ? "light" : "dark"}
          />
        </Box>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY INTERESTS AND HOBBIES/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdFlightTakeoff}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Travelling & Exploring</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              I am passionate about traveling and exploring new places. Whether
              it's uncovering hidden gems in my own backyard or embarking on
              exciting adventures, I thrive on the thrill of discovering new
              cultures, cuisines, and landscapes. Traveling not only broadens my
              horizons but also provides me with valuable life experiences and a
              deep appreciation for the diversity of our world. It fuels my
              curiosity, inspires my creativity, and allows me to connect with
              people from different walks of life. I believe that every journey
              is an opportunity for personal growth and self-discovery!!
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={LiaDrumSolid}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing Drums</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              I have a deep passion for playing the drums, which has been a
              cherished hobby of mine for many years. The rhythmic beats and the
              feeling of being in sync with the music provide me with a sense of
              joy and creative expression that is truly unparalleled. Whether
              it's jamming with friends, exploring new techniques, or simply
              drumming to my favorite tunes, I find immense fulfillment and
              relaxation in this musical pursuit. My love for drumming not only
              serves as a source of personal joy but also reflects my dedication
              to honing my skills and maintaining a well-rounded lifestyle!!
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={GiCricketBat}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing Outdoor Games</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Whether it's a competitive game of soccer, a relaxing round of
              golf, or simply throwing a frisbee in the park, I find immense joy
              and fulfillment in the great outdoors. Playing sports not only
              keeps me physically active but also fosters teamwork, leadership,
              and a strong sense of camaraderie. It's a wonderful way for me to
              unwind, stay fit, and connect with friends and family while
              enjoying the beauty of nature!!
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
