import { Heading, StyleProps } from "@chakra-ui/react";

export const Logo = (props: StyleProps) => (
  <Heading
    color="brand.300"
    fontWeight={400}
    fontSize="74px"
    maxWidth="250px"
    lineHeight="65px"
    {...props}
  >
    try{" "}
    <span
      style={{
        fontWeight: 900,
        display: "inline-block",
        transform: "translateY(8px)",
      }}
    >
      rituals
    </span>{" "}
    .com
  </Heading>
);
