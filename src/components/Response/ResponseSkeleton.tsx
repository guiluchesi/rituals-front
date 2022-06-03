import { Box, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

export const ResponseSkeleton = () => {
  return (
    <Box bgColor="#525F7F4D" borderRadius="10px" mt={6} p="40px">
      <Flex alignItems="center" pb={4} borderBottom="1px solid #525F7F">
        <Skeleton
          height="40px"
          width="40px"
          borderRadius="50%"
          startColor="#525F7F4D"
          endColor="#525f7f94"
        />
        <Skeleton
          height="30px"
          width="300px"
          ml={5}
          startColor="#525F7F4D"
          endColor="#525f7f94"
        />
        <Skeleton
          height="30px"
          width="150px"
          ml="auto"
          mr={0}
          startColor="#525F7F4D"
          endColor="#525f7f94"
        />
      </Flex>

      <Box mt={6}>
        <Skeleton
          height="20px"
          width="300px"
          startColor="#525F7F4D"
          endColor="#525f7f94"
        />
        <SkeletonText
          mt={3}
          noOfLines={4}
          startColor="#525F7F4D"
          endColor="#525f7f94"
        />
      </Box>

      <Box mt={6}>
        <Skeleton
          height="20px"
          width="300px"
          startColor="#525F7F4D"
          endColor="#525f7f94"
        />
        <SkeletonText
          mt={3}
          noOfLines={4}
          startColor="#525F7F4D"
          endColor="#525f7f94"
        />
      </Box>
    </Box>
  );
};
