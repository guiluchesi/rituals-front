export const Button = {
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
