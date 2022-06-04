import { Flex, Skeleton, StyleProps } from "@chakra-ui/react";

export const RitualSkeleton = (props: StyleProps) => {
  return (
    <Flex bg="#525F7F4D" borderRadius="10px" py={5} px={7} {...props}>
      <Skeleton startColor="#525F7F4D" endColor="#525f7f94" w="100%" h="70px" />

      <Flex
        flexDir={["row", "column"]}
        w={["100%", "130px"]}
        justifyContent={["space-between"]}
        ml={3}
      >
        <Skeleton
          startColor="#525F7F4D"
          endColor="#525f7f94"
          w="100%"
          h="30px"
        />
        <Skeleton
          startColor="#525F7F4D"
          endColor="#525f7f94"
          w="100%"
          h="30px"
        />
      </Flex>
    </Flex>
  );
};
