import { React, useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Grid,
  useColorModeValue,
  useStyleConfig,
  Skeleton,
} from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import dashboardimg from "../../assets/dashboard.gif";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Dashboard() {
  const [loadedDashboardimg, setloadedDashboardimg] = useState(false);
  const styles = useStyleConfig("Card");
  let highlightTextColor = useColorModeValue("lightblue.100", "lightpeach.100");
  let textColor = useColorModeValue("gray.700", "white");
  let quotes = [
    {
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison, type.fit",
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra, type.fit",
    },
    {
      text: "A house divided against itself cannot stand.",
      author: "Abraham Lincoln, type.fit",
    },
    {
      text: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgang von Goethe, type.fit",
    },
    {
      text: "Fate is in your hands and no one elses",
      author: "Byron Pulsifer, type.fit",
    },
    {
      text: "Be the chief but never the lord.",
      author: "Lao Tzu, type.fit",
    },
    {
      text: "Nothing happens unless first we dream.",
      author: "Carl Sandburg, type.fit",
    },
    {
      text: "Well begun is half done.",
      author: "Aristotle, type.fit",
    },
    {
      text: "Life is a learning experience, only if you learn.",
      author: "Yogi Berra",
    },
    {
      text: "Self-complacency is fatal to progress.",
      author: "Margaret Sangster, type.fit",
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha, type.fit",
    },
    {
      text: "What you give is what you get.",
      author: "Byron Pulsifer, type.fit",
    },
    {
      text: "We can only learn to love by loving.",
      author: "Iris Murdoch, type.fit",
    },
    {
      text: "Life is change. Growth is optional. Choose wisely.",
      author: "Karen Clark, type.fit",
    },
    {
      text: "You'll see it when you believe it.",
      author: "Wayne Dyer, type.fit",
    },
    {
      text: "Today is the tomorrow we worried about yesterday.",
      author: "type.fit",
    },
  ];

  let randomNumber = Math.floor(Math.random() * quotes.length);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

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
      <Box pt={{ base: "60px", md: "80px", xl: "10px" }}>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr",
            }}
            templateRows={{
              base: "repeat(2, 0.5fr)",
              lg: "1fr",
            }}
            gap={{ xl: "20px" }}
          >
            <Box
              pt={{ xl: "100px" }}
              pl="10px"
              textAlign="center"
              fontSize={{ sm: "1.5em", md: "3em", xl: "2.5em" }}
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box __css={styles} border="none">
                  <Text
                    fontFamily="Lobster Two"
                    fontWeight="bold"
                    color={textColor}
                  >
                    Hello Everyone!! 🙋🏻‍♂️
                  </Text>

                  <Text
                    fontFamily="Lobster Two"
                    fontWeight="bold"
                    color={textColor}
                    mt="20px"
                  >
                    This is{" "}
                    <Text display="inline-flex" color={highlightTextColor}>
                      Rahul Kumar Patro
                    </Text>
                  </Text>
                  <Text
                    fontFamily="Lobster Two"
                    fontWeight="bold"
                    color={textColor}
                    mt="20px"
                  >
                    I am a{" "}
                    <Text display="inline-flex" color={highlightTextColor}>
                      Software Developer
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Skeleton
                height={loadedDashboardimg ? "100%" : "50%"}
                isLoaded={loadedDashboardimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={dashboardimg}
                  alt="dashboard"
                  effect="blur"
                  onLoad={() => setloadedDashboardimg(true)}
                />
              </Skeleton>
            </Flex>
          </Grid>
        </Flex>

        <Flex direction="column" justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            border="none"
            textAlign="center"
            cursor="default"
            mt="20px"
          >
            Random Quote
            <Box
              fontSize={{ sm: "1em", md: "1.3em", xl: "1.3em" }}
              color={highlightTextColor}
              cursor="default"
            >
              {quotes[randomNumber]?.text ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(quotes[randomNumber]?.text).start();
                  }}
                />
              ) : (
                <span>|</span>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
