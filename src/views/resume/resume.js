import React from "react";
import { TypeAnimation } from "react-type-animation";
import resume from "../../assets/Rahul_Kumar_Patro_Resume.pdf";
import { Box, useStyleConfig, Flex } from "@chakra-ui/react";

export default function Resume() {
  const styles = useStyleConfig("Card");
  return (
    <Box pt={{ base: "30px", md: "50px", xl: "50px" }}>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt="40px"
        mb="20px"
      >
        <TypeAnimation
          sequence={["RESUME"]}
          style={{ fontSize: "3em" }}
          cursor={false}
        />
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Box
          __css={styles}
          width={{ base: "100%", md: "70%", xl: "70%" }}
          height={{ base: "60vh", md: "100vh", xl: "150vh" }}
          overflow="hidden"
          borderRadius="md"
          style={{ border: "1px solid white" }}
        >
          <iframe
            src="https://drive.google.com/file/d/143ZCD6FQKXtLn6H42kBR1p6geZjsU6fQ/preview"
            title="Resume"
            width="100%"
            height="100%"
            style={{ border: "5px solid white" }}
          ></iframe>
        </Box>
      </Flex>
    </Box>
  );
}
