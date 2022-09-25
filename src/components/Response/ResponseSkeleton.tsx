import { Box, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

import { InternCard } from "../Card";

export const ResponseSkeleton = () => {
  return (
    <InternCard mt={6}>
      <Flex alignItems="center" pb={4} borderBottom="1px solid #525F7F">
        <Skeleton
          height="40px"
          width="40px"
          borderRadius="50%"
          startColor="brand.650"
          endColor="brand.650"
        />
        <Skeleton
          height="30px"
          width="300px"
          ml={5}
          startColor="brand.650"
          endColor="brand.650"
        />
        <Skeleton
          height="30px"
          width="150px"
          ml="auto"
          mr={0}
          startColor="brand.650"
          endColor="brand.650"
        />
      </Flex>

      <Box mt={6}>
        <Skeleton
          height="20px"
          width="300px"
          startColor="brand.650"
          endColor="brand.650"
        />
        <SkeletonText
          mt={3}
          noOfLines={4}
          startColor="brand.650"
          endColor="brand.650"
        />
      </Box>

      <Box mt={6}>
        <Skeleton
          height="20px"
          width="300px"
          startColor="brand.650"
          endColor="brand.650"
        />
        <SkeletonText
          mt={3}
          noOfLines={4}
          startColor="brand.650"
          endColor="brand.650"
        />
      </Box>
    </InternCard>
  );
};
