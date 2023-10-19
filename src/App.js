import "./App.css";
import Sidenav from "./components/Sidenav/Sidenav";
import Footer from "./components/Footer/Footer";
import routes from "./routes.js";
import { Box, useColorMode } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

export default function App() {
  const { colorMode } = useColorMode();

  const redirectRoute = (routes) => {
    return routes.map((route, key) => {
      return (
        <Route path={route.path} element={<route.component />} key={key} />
      );
    });
  };

  const StarryBackground = () => {
    const numberOfStars = 100;
    const stars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`
      };

      const starClassName = colorMode === "light" ? "star-black" : "star-white";

      stars.push(<div key={i} className={starClassName} style={style}></div>);
    }

    return <div className="starry-background">{stars}</div>;
  };
  return (
    <Router>
      <StarryBackground />
      <Sidenav routes={routes} />
      <Box
        float="right"
        height="100%"
        overflow="auto"
        position="relative"
        maxHeight="100%"
        w={{ sm: "100%", xl: "calc( 100% - 290px )" }}
        maxWidth={{ sm: "100%", xl: "calc( 100% - 290px )" }}
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
      >
        <Box
          mx="auto"
          p={{ base: "20px", md: "30px" }}
          pe="20px"
          minH={{ base: "85vh", xl: "89vh" }}
          pt="50px"
          overflow="hidden"
        >
          <Routes>
            {redirectRoute(routes)}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}
