import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Link,
  useColorModeValue,
  useStyleConfig,
  Text
} from "@chakra-ui/react";

export default function ProjectCard(props) {
  const {
    projectImage,
    aboutProject,
    techStack,
    projectName,
    projectLiveLink,
    projectLink
  } = props;
  const textColor = useColorModeValue("navy.700", "lightgreen.100");
  const styles = useStyleConfig("Card");
  return (
    <Box
      __css={styles}
      h={{ base: "100%", "3xl": "300px" }}
      transition="transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out"
      _hover={{
        base: "none",
        xl: { transform: "scale(1.03)", boxShadow: "md", border: "1px solid" }
      }}
    >
      <Flex direction={{ base: "column" }} justify="center">
        <Box mb={{ base: "10px", "2xl": "10px" }} position="relative">
          <Image
            src={projectImage}
            w={{ base: "100%", "3xl": "100%" }}
            h={{ base: "100%", "3xl": "250px" }}
            borderRadius="10px"
            p="20px"
            // border="2px solid"
            // borderColor={textColor}
          />
        </Box>
        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex direction="row" align="center" justify="Center">
            <Text
              color={textColor}
              fontSize={{
                base: "xl",
                md: "lg",
                lg: "lg",
                xl: "lg",
                "2xl": "md",
                "3xl": "lg"
              }}
              mb="5px"
              me="14px"
              textAlign="center"
              cursor="default"
            >
              {projectName}
            </Text>
          </Flex>
          <Flex direction="row" align="center" justify="Center">
            <Text
              color="secondaryGray.500"
              fontSize={{
                base: "sm"
              }}
              mb="5px"
              me="14px"
              textAlign="center"
            >
              {aboutProject}
            </Text>
          </Flex>
          <Flex direction="row" align="center" justify="Center">
            <Text
              color={textColor}
              fontSize={{
                base: "sm"
              }}
              mb="5px"
              me="14px"
              textAlign="center"
            >
              {techStack}
            </Text>
          </Flex>
          <Flex
            align="center"
            justify="center"
            direction={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
              "2xl": "row"
            }}
            gap={{
              base: "20px"
            }}
            p="20px"
          >
            {projectLiveLink ? (
              <>
                <Link
                  href={projectLiveLink}
                  target="blank"
                  mt={{
                    base: "0px",
                    md: "10px",
                    lg: "0px",
                    xl: "10px",
                    "2xl": "0px"
                  }}
                >
                  <Button
                    variant="darkBrand"
                    color="white"
                    fontSize="sm"
                    fontFamily="DM Sans"
                    borderRadius="70px"
                    px="24px"
                    py="5px"
                  >
                    View Website
                  </Button>
                </Link>
              </>
            ) : (
              <></>
            )}
            <Link
              href={projectLink}
              target="blank"
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px"
              }}
            >
              <Button
                variant="darkBrand"
                color="white"
                fontSize="sm"
                fontFamily="DM Sans"
                borderRadius="70px"
                px="24px"
                py="5px"
              >
                {techStack ? "View Project" : "View Blog"}
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
