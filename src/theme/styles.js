import { mode } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    other: {
      800: "#190793",
      900: "#11047A"
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559"
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1B254B",
      800: "#111c44",
      900: "#0b1437"
    },
    navyBlue: {
      100: "#192734",
      200: "#152f47",
      300: "#272445",
      400: "#1F1D36"
    },
    lightpeach: {
      100: "#E9A6A6"
    },
    lightblue: {
      100: "#0284c7"
    },
    gray: {
      100: "#FAFCFE"
    }
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navyBlue.400")(props),
        fontFamily: "Lilita One",
        fontWeight: "200"
      },
      input: {
        color: "gray.700"
      },
      html: {
        fontFamily: "Lilita One"
      },
      ".chakra-text": {
        "&:hover": {
          cursor: "default"
        }
      }
    })
  }
};
