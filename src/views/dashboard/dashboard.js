import React from "react";
import {
  Flex,
  Box,
  Text,
  Grid,
  useColorModeValue,
  useStyleConfig
} from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import dashboardimg from "../../assets/sidenavgif.gif";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Dashboard() {
  const [quote, setQuote] = useState("");
  const styles = useStyleConfig("Card");

  let highlightTextColor = useColorModeValue("lightblue.100", "lightgreen.100");
  let textColor = useColorModeValue("gray.700", "white");

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        let content = response.data.content;
        setQuote(content);
      })
      .catch((error) => {
        setQuote("");
        console.error("Error fetching quote:", error);
      });
  }, []);

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "60px", md: "80px", xl: "10px" }}>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr"
            }}
            templateRows={{
              base: "repeat(2, 0.5fr)",
              lg: "1fr"
            }}
            gap={{ xl: "20px" }}
          >
            <Box
              pt={{ xl: "100px" }}
              pl="10px"
              textAlign="center"
              fontSize={{ sm: "1.5em", md: "2em", xl: "3em" }}
            >
              <Text
                fontFamily="Lobster Two"
                fontWeight="bold"
                color={textColor}
              >
                Hello Everyone!!🙋‍♂️
              </Text>

              <Text
                fontFamily="Lobster Two"
                fontWeight="bold"
                color={textColor}
                mt="20px"
              >
                This is{" "}
                <Text display="inline-flex" color={highlightTextColor}>
                  Rahul Kumar Patro
                </Text>
              </Text>

              <Text
                fontFamily="Lobster Two"
                fontWeight="bold"
                color={textColor}
                mt="20px"
              >
                I am a{" "}
                <Text display="inline-flex" color={highlightTextColor}>
                  Software Developer
                </Text>
              </Text>
            </Box>

            <LazyLoadImage src={dashboardimg} alt="dashboard" effect="blur" />
          </Grid>
        </Flex>

        <Flex direction="column" justifyContent="center" alignItems="center">
          <Box __css={styles} border="none" textAlign="center" cursor="default">
            Random Quote
            <Box
              fontSize={{ sm: "1em", md: "1.5em", xl: "1.5em" }}
              color={highlightTextColor}
              cursor="default"
            >
              {quote ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(quote).start();
                  }}
                />
              ) : (
                <span>|</span>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
