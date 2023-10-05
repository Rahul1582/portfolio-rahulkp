import React from "react";
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useStyleConfig
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import contactimg from "../../assets/contact.png";
import contactimg1 from "../../assets/contact1.png";

export default function Contact() {
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("brand.400", "lightgreen.100");
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
      <Box pt="30px">
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <Image src={contactimg}></Image>
          </Box>
          <Box>
            <Image src={contactimg1}></Image>
          </Box>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Text textAlign="center">FIND ME @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                Truminds Software Systems
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Text textAlign="center">EMAIL ME @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                rahulkpatro@gmail.com
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Text textAlign="center">CALL ME @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                (+91)-7667232335
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
