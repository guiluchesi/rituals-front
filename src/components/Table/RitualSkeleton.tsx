import { Flex, Skeleton, StyleProps } from "@chakra-ui/react";

import { InternCard } from "../Card";

export const RitualSkeleton = (props: StyleProps) => {
  return (
    <InternCard display="flex" py={5} px={7} {...props}>
      <Skeleton startColor="brand.650" endColor="brand.650" w="100%" h="70px" />

      <Flex
        flexDir={["row", "column"]}
        w={["100%", "130px"]}
        justifyContent={["space-between"]}
        ml={3}
      >
        <Skeleton
          startColor="brand.650"
          endColor="brand.650"
          w="100%"
          h="30px"
        />
        <Skeleton
          startColor="brand.650"
          endColor="brand.650"
          w="100%"
          h="30px"
        />
      </Flex>
    </InternCard>
  );
};
