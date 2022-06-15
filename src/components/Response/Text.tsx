import { Box, Text } from "@chakra-ui/react";

import { AnswerBasicProps } from "./Response";

export interface TextAnswerProps extends AnswerBasicProps {}

export const TextAnswer = ({ question, answer }: TextAnswerProps) => (
  <Box mt={4}>
    <Text color="white">{question}</Text>
    <Box color="brand.200">
      {answer
        ? answer.split("\n").map((text: string) => <Text>{text}</Text>)
        : "-"}
    </Box>
  </Box>
);
