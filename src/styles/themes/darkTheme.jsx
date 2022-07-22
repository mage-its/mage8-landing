import { createTheme, NextUIProvider } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    fonts: {
      sans: "Poppins, sans-serif",
    },
    colors: {
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "$green600",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",
      secondaryLight: "$blue200",
      secondaryLightHover: "$blue300",
      secondaryLightActive: "$blue400",
      secondaryLightContrast: "$blue600",
      secondary: "$blue600",
      secondaryBorder: "$blue500",
      secondaryBorderHover: "$blue600",
      secondarySolidHover: "$blue700",
      secondarySolidContrast: "$white",
      secondaryShadow: "$blue500",
      selection: "#5ba48c",
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
    },
  },
});

export default darkTheme;
