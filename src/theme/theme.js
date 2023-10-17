import { extendTheme } from "@chakra-ui/react";
import { CardComponent } from "./additions/card/card";
import { buttonStyles } from "./components/button";
import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";

export default extendTheme(
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false
    }
  },
  { breakpoints },
  globalStyles,
  buttonStyles,
  CardComponent
);
