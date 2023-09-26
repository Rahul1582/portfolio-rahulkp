import React from "react";
import { Box, useColorModeValue, useStyleConfig, Text } from "@chakra-ui/react";

export default function AboutMeInfo(props) {
  const { title, value } = props;
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const bg = useColorModeValue("white", "navyBlue.400");
  const styles = useStyleConfig("Card");
  return (
    <Box __css={styles} bg={bg} paddingLeft="5px" paddingRight="5px">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="5px"
      >
        <Text color={textColorSecondary} fontSize="16px" textAlign="center">
          {title}
        </Text>
        <Text color={textColorPrimary} fontSize="16px" textAlign="center">
          {value}
        </Text>
      </Box>
    </Box>
  );
}
