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
  const { image, name, download } = props;
  const textColor = useColorModeValue("navy.700", "white");
  const styles = useStyleConfig("Card");
  return (
    <Box __css={styles}>
      <Flex direction={{ base: "column" }} justify="center">
        <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
          <Image
            src={image}
            w={{ base: "100%", "3xl": "100%" }}
            h={{ base: "200px", "3xl": "200px" }}
            borderRadius="10px"
            p="20px"
            border="1px dotted white"
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
              fontWeight="bold"
              me="14px"
            >
              {name}
            </Text>
          </Flex>
          <Flex
            align="center"
            justify="space-between"
            direction={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row"
            }}
            gap={{
              base: "20px"
            }}
            mt="15px"
            p="25px"
          >
            <Link
              href={download}
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
                fontWeight="500"
                borderRadius="70px"
                px="24px"
                py="5px"
              >
                View Link
              </Button>
            </Link>

            <Link
              href={download}
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
                fontWeight="500"
                borderRadius="70px"
                px="24px"
                py="5px"
              >
                View Project
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
