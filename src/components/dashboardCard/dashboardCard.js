import React from "react";
import { Box, useStyleConfig, Flex, Image } from "@chakra-ui/react";

export default function DashboardCard(props) {
  const { imagepath } = { ...props };
  const styles = useStyleConfig("Card");

  return (
    <Box
      __css={styles}
      transition="transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out"
      _hover={{
        transform: "scale(1.08)", // Scale up on hover
        boxShadow: "lg", // Add a box shadow on hover
        cursor: "pointer" // Change cursor to pointer on hover
      }}
    >
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        <Image boxSize="120px" src={imagepath}></Image>
      </Flex>
    </Box>
  );
}
