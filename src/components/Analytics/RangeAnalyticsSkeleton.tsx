import { Box, Skeleton } from "@chakra-ui/react";

import { InternCard } from "../Card";

const getRandomNumber = (maxNumber: number) =>
  Math.floor(Math.random() * maxNumber) + 1;

export const RangeSkeleton = () => {
  const cols = getRandomNumber(10);

  return (
    <InternCard mt={6}>
      <Box pb={4} borderBottom="1px solid #525F7F" mb={8}>
        <Skeleton
          height="20px"
          width="300px"
          startColor="brand.650"
          endColor="brand.655"
        />
      </Box>

      {[...Array(cols).keys()].map((_, index) => {
        const width = getRandomNumber(100);

        return (
          <Skeleton
            key={index}
            height="20px"
            width={`${width}%`}
            startColor="brand.650"
            endColor="brand.655"
            mb={3}
          />
        );
      })}
    </InternCard>
  );
};
