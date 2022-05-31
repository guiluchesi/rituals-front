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
  },
};

const components = { Table, Button };

const theme = extendTheme({ fonts, colors, components });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
