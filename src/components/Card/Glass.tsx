import { FC, ReactNode } from "react";
import { Box, StyleProps } from "@chakra-ui/react";

export interface GlassCardProps extends StyleProps {
  children: ReactNode;
}

export const GlassCard: FC<GlassCardProps> = ({ children, ...rest }) => {
  return (
    <Box
      background="rgba(32, 25, 40, 0.3)"
      border="2px solid rgba(157, 255, 249, 0.1)"
      boxShadow="0px 0px 14px 3px rgba(0, 0, 0, 0.03), 0px 0px 56px rgba(83, 83, 191, 0.07)"
      borderRadius="20px"
      backdropFilter="blur(7px)"
      {...rest}
    >
      {children}
    </Box>
  );
};
