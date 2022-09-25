import { extendTheme } from "@chakra-ui/react";

import { components } from "./components";
import { colors, fonts } from "./tokens";

export const theme = extendTheme({ fonts, colors, components });
