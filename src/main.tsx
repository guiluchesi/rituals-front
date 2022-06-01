import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/900.css";

import App from "./App";

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`,
};

const colors = {
  brand: {
    300: "#9DFFF9",
    400: "#8C8BFF",
    500: "#6F6EFF",
    600: "#6F6EFF38",
    700: "#383780",
    800: "#0B0B1A",
  },
};

const Table = {
  variants: {
    simple: {
      th: {
        borderColor: "#525F7F !important",
        border: "1px solid",
        color: "#D4DCE5",
        fontSize: "12px",
        padding: "8px 13px",
        textTransform: "none",
        fontWeight: 400,
      },
      td: {
        borderColor: "#525F7F !important",
        border: "1px solid",
        padding: "10px 13px",
      },
    },
  },
};

const Button = {
  variants: {
    solid: {
      padding: "6px 12px",
      backgroundColor: "brand.500",
      height: "unset",
      borderRadius: "10px",
      _hover: {
        backgroundColor: "brand.600",
      },
    },
    ghost: {
      padding: "8px 12px",
      height: "unset",
      borderRadius: "none",
      borderBottom: "1px solid transparent",
      _hover: {
        backgroundColor: "transparent",
        borderBottomColor: "#FEFEFE",
        color: "#fff",
      },
    },
  },
};

const Container = {
  baseStyle: {
    maxWidth: ["90%", "576px", "768px", "992px", "1200px", "1400px"],
  },
};

export const Checkbox = {
  baseStyle: {
    control: {
      borderRadius: "0",
      border: "1px solid",
      borderColor: "#525F80",

      "&[data-focus]": {
        boxShadow: "none",
      },

      "&[data-checked]": {
        bg: "brand.500",
        border: "1px solid",
        borderColor: "#525F80",

        "&[data-hover]": {
          bg: "brand.500",
        },
      },

      "&[data-disabled]": {
        bg: "transparent",
        borderColor: "#525F80",
        cursor: "auto",

        "&[data-checked]": {
          bg: "brand.500",
          borderColor: "#525F80",
          cursor: "auto",

          "&[data-hover]": {
            bg: "brand.500",
            borderColor: "#525F80",
            cursor: "auto",
          },
        },
      },
    },

    label: {
      "&[data-disabled]": {
        cursor: "auto",

        "&[data-hover]": {
          cursor: "auto",
        },
      },
    },
  },
};

const components = { Table, Button, Container, Checkbox };

const theme = extendTheme({ fonts, colors, components });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
