import { Box, Container, StyleProps } from "@chakra-ui/react";

import { Logo } from "../Logo";

export interface HeaderProps extends StyleProps {
  backgroundImage?: string;
  children?: React.ReactNode;
}

export const Header = ({ backgroundImage, children, ...rest }: HeaderProps) => {
  return (
    <Box
      bgColor="brand.800"
      minHeight="350px"
      pt="80px"
      position="relative"
      _before={{
        content: `""`,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        right: 0,
        bgImage: backgroundImage,
        backgroundSize: "cover",
        opacity: 0.35,
        zIndex: 0,
      }}
      _after={{
        content: `""`,
        position: "absolute",
        width: "100%",
        height: "200px",
        bottom: 0,
        right: 0,
        bgGradient: "linear-gradient(transparent, brand.800)",
        zIndex: 0,
      }}
      {...rest}
    >
      <Container position="relative" zIndex={1}>
        <Logo />
        {children}
      </Container>
    </Box>
  );
};
