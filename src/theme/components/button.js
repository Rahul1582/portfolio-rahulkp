import { mode } from "@chakra-ui/theme-tools";
export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "16px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none"
        },
        _active: {
          boxShadow: "none"
        }
      },
      variants: {
        darkBrand: (props) => ({
          bg: mode("lightblue.100", "lightgreen.100")(props),
          color: mode("white", "black")(props),
          _focus: {
            bg: mode("lightgreen.100", "lightblue.100")(props)
          },
          _active: {
            bg: mode("lightgreen.100", "lightblue.100")(props)
          },
          _hover: {
            bg: mode("lightgreen.100", "lightblue.100")(props)
          }
        })
      }
    }
  }
};
