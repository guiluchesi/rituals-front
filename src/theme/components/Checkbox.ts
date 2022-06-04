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
