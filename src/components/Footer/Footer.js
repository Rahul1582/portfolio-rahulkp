import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { AiFillGithub, AiFillHeart } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "lightgreen.100");

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
        display="flex"
        mb={{ base: "20px", xl: "0px" }}
      >
        {" "}
        &copy; {1900 + new Date().getYear()}
        <Text display="flex" as="span" ms="10px">
          {"</>"} with{" "}
          <Text display="flex" pt="3px">
            <AiFillHeart />
          </Text>{" "}
          by Rahul Kumar Patro • All Rights Reserved
        </Text>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
        >
          <Link href="https://github.com/Rahul1582" target="blank">
            <AiFillGithub />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
        >
          <Link href="https://leetcode.com/rahul158_/" target="blank">
            <SiLeetcode />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
        >
          <Link href="https://www.linkedin.com/in/rahulkp15/" target="blank">
            <BiLogoLinkedin />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
        >
          <Link href="https://www.instagram.com/_rahul_patro_/" target="blank">
            <BsInstagram />
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
