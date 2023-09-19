import React from "react";
import { Document, Page } from "react-pdf";
import resume from "../../assets/Rahul_Kumar_Patro_Resume.pdf";
import { Box, Flex } from "@chakra-ui/react";

export default function Resume() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justifyContent="center" alignItems="center" pb="30px">
        <Document file={resume}>
          <Page
            pageNumber={1}
            size="A9"
            width={800}
            height={5}
            orientation="landscape"
          />
        </Document>
      </Flex>
    </Box>
  );
}
