import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
  Box
} from "@chakra-ui/react";

import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");

  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row"
      }}
      alignItems={{
        base: "center",
        xl: "start"
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "40px" }}
      pb="30px"
      mt="20px"
      fontSize="20px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start"
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        {" "}
        &copy; {1900 + new Date().getYear()}
        <Text as="span" fontWeight="500" ms="10px">
          Rahul Kumar Patro • All Rights Reserved
        </Text>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
        >
          <Link href="https://www.simmmple.com/licenses?ref=horizon-chakra-free">
            <AiFillGithub />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
        >
          <Link href="https://www.simmmple.com/licenses?ref=horizon-chakra-free">
            <SiLeetcode />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
        >
          <Link href="https://www.simmmple.com/licenses?ref=horizon-chakra-free">
            <BiLogoLinkedin />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
        >
          <Link href="https://www.simmmple.com/licenses?ref=horizon-chakra-free">
            <BsInstagram />
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
