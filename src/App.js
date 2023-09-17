import "./App.css";
import Sidenav from "./components/Sidenav/Sidenav";
import Footer from "./components/Footer/Footer";
import routes from "./routes.js";
import { Box } from "@chakra-ui/react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Sidenav routes={routes} />
      <Box
        float="right"
        minHeight="100vh"
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
        <Box>
          <Footer />
        </Box>
      </Box>
    </HashRouter>
  );
}
