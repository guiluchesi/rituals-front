import { Box, Text, Flex, Checkbox } from "@chakra-ui/react";

import { AnswerBasicProps } from "./Response";

export interface RangeAnswerProps extends AnswerBasicProps {
  range: number;
}

export const RangeAnswer = ({ question, answer, range }: RangeAnswerProps) => (
  <Box mt={4}>
    <Text color="white">{question}</Text>
    <Flex mt={2}>
      {[...Array(range).keys()].map((index) => (
        <Checkbox
          isDisabled
          key={`${question}-${index}`}
          display="flex"
          flexDir="column"
          color="white"
          spacing="0"
          mr={2}
          icon={<></>}
          isChecked={index === answer}
        >
          <span>{index}</span>
        </Checkbox>
      ))}
    </Flex>
  </Box>
);
