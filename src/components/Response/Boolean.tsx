import { Box, Text, Flex, Checkbox } from "@chakra-ui/react";

import { AnswerBasicProps } from "./Response";

export interface BooleanAnswerProps extends AnswerBasicProps {}

export const BooleanAnswer = ({ question, answer }: BooleanAnswerProps) => {
  return (
    <Box mt={4}>
      <Text color="white">{question}</Text>
      <Flex mt={2}>
        <Checkbox
          isDisabled
          display="flex"
          flexDir="column"
          color="white"
          spacing="0"
          mr={2}
          icon={<></>}
          isChecked={answer}
        >
          Y
        </Checkbox>
        <Checkbox
          isDisabled
          display="flex"
          flexDir="column"
          color="white"
          spacing="0"
          mr={2}
          icon={<></>}
          isChecked={!answer}
        >
          N
        </Checkbox>
      </Flex>
    </Box>
  );
};
