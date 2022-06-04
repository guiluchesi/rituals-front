import { Box, Flex, Heading, Text, StyleProps, Img } from "@chakra-ui/react";
import moment from "moment";

import userCircle from "../../assets/icons/user-circle.svg";
import { Response as ResponseType } from "../../hooks/rituals/useResponses";

import { TextAnswer } from "./Text";
import { RangeAnswer } from "./Range";
import { BooleanAnswer } from "./Boolean";

export interface AnswerBasicProps {
  question: string;
  answer: any;
}

export interface ResponseProps extends StyleProps {
  response: ResponseType;
}

export const Response = ({ response, ...rest }: ResponseProps) => {
  const answerTypes = {
    text: ["short_text", "long_text"],
    range: ["opinion_scale"],
    boolean: ["yes_no"],
  };

  return (
    <Box bgColor="#525F7F4D" p={["20px", "40px"]} borderRadius="10px" {...rest}>
      <Flex
        alignItems={["flex-start", "center"]}
        justifyContent="space-between"
        borderBottom="1px solid #525F7F"
        pb={2}
        flexDir={["column", "row"]}
      >
        <Flex>
          <Img src={userCircle} mr={2} />
          <Heading fontSize="25px" color="white">
            {response.owner}
          </Heading>
        </Flex>
        <Text color="#525F80">{moment(response.submitted).format("LLL")}</Text>
      </Flex>

      {response.answers.map((answer) => {
        const userAnswer = answer[answer.type];

        if (answerTypes.text.includes(answer.fieldType)) {
          return (
            <TextAnswer
              key={answer.fieldId}
              question={answer.question}
              answer={userAnswer}
            />
          );
        }

        if (answerTypes.range.includes(answer.fieldType)) {
          return (
            <RangeAnswer
              key={answer.fieldId}
              question={answer.question}
              answer={userAnswer}
              range={answer.properties.steps}
            />
          );
        }

        if (answerTypes.boolean.includes(answer.fieldType)) {
          return (
            <BooleanAnswer
              key={answer.fieldId}
              question={answer.question}
              answer={userAnswer}
            />
          );
        }
      })}
    </Box>
  );
};
