import { Box, StyleProps } from "@chakra-ui/react";

export interface InternProps extends StyleProps {
  children: React.ReactNode;
}

export const InternCard = ({ children, ...rest }: InternProps) => {
  return (
    <Box
      bgColor="brand.650"
      px={["20px", "40px"]}
      py={["20px", "40px"]}
      borderRadius="10px"
      {...rest}
    >
      {children}
    </Box>
  );
};
