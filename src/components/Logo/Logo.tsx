import { Img, StyleProps } from "@chakra-ui/react";

import logo from "../../assets/img/rituals-logo.svg";

export const Logo = (props: StyleProps) => (
  <Img src={logo} maxW="215px" {...props} />
);
