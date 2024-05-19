import { React, useState } from "react";
import { Box, useStyleConfig, Flex, Image, Skeleton } from "@chakra-ui/react";

export default function TechStackCard(props) {
  const { imagepath, background } = { ...props };
  const styles = useStyleConfig("Card");
  const [loadedTechimg, setloadedTechimg] = useState(false);

  return (
    <Box
      __css={styles}
      s
      transition="transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out"
      _hover={{
        base: "none",
        xl: { transform: "scale(1.08)", boxShadow: "lg", cursor: "pointer" }
      }}
    >
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        <Skeleton
          isLoaded={loadedTechimg}
          color="white"
          fadeDuration={1}
          height={"100%"}
        >
          <Image
            boxSize="120px"
            src={imagepath}
            backgroundColor={background}
            onLoad={() => setloadedTechimg(true)}
          ></Image>
        </Skeleton>
      </Flex>
    </Box>
  );
}
