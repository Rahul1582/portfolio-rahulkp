import React from "react";
import {
  Flex,
  Box,
  Text,
  Grid,
  useStyleConfig,
  useColorModeValue
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import check from "../../assets/sidenavgif.gif";

export default function Dashboard() {
  const styles = useStyleConfig("Card");
  let highlightTextColor = useColorModeValue("brand.400", "lightgreen.100");
  let textColor = useColorModeValue("gray.700", "white");
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
      <Box pt={{ base: "130px", md: "80px", xl: "40px" }}>
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
              fontSize={{ base: "2em", xl: "3em" }}
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

            <img src={check} alt="dashboard" />
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
}
