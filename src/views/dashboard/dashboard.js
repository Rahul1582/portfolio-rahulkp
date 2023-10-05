import React from "react";
import { Flex, Box, Text, Grid, useStyleConfig } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import check from "../../assets/sidenavgif.gif";

export default function Dashboard() {
  const styles = useStyleConfig("Card");
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
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr"
            }}
            templateRows={{
              base: "repeat(2, 1fr)",
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box __css={styles} pt="0px">
              <img src={check} alt="dashboard" />
            </Box>
            <Box __css={styles} pt="0px">
              <img src={check} alt="dashboard" />
            </Box>
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
}
