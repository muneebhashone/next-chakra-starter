// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const chakraTheme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: montserrat.style.fontFamily,
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props),
        lineHeight: "base",
      },
    }),
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default chakraTheme;
