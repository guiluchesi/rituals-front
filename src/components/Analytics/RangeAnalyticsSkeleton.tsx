import { Box, Skeleton } from "@chakra-ui/react";

const getRandomNumber = (maxNumber: number) =>
  Math.floor(Math.random() * maxNumber) + 1;

export const RangeSkeleton = () => {
  const cols = getRandomNumber(10);

  return (
    <Box bgColor="#525F7F4D" borderRadius="10px" mt={6} p="40px">
      <Box pb={4} borderBottom="1px solid #525F7F" mb={8}>
        <Skeleton
          height="20px"
          width="300px"
          startColor="#525F7F4D"
          endColor="#525f7f94"
        />
      </Box>

      {[...Array(cols).keys()].map((_, index) => {
        const width = getRandomNumber(100);

        return (
          <Skeleton
            key={index}
            height="20px"
            width={`${width}%`}
            startColor="#525F7F4D"
            endColor="#525f7f94"
            mb={3}
          />
        );
      })}
    </Box>
  );
};
