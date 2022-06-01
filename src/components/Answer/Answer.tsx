import {
  Box,
  Flex,
  Heading,
  Text,
  Checkbox,
  StyleProps,
  Img,
} from "@chakra-ui/react";
import userCircle from "../../assets/icons/user-circle.svg";

export interface AnswerProps extends StyleProps {}

export const Answer = (props: AnswerProps) => {
  return (
    <Box bgColor="#525F7F4D" p="40px" borderRadius="10px" {...props}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid #525F7F"
        pb={2}
      >
        <Flex>
          <Img src={userCircle} mr={2} />
          <Heading fontSize="25px" color="white">
            George Harrison
          </Heading>
        </Flex>
        <Text color="#525F80">March 22, 2022 8:03 AM</Text>
      </Flex>

      <Box mt={4}>
        <Text color="white">What have you done last week?</Text>
        <Text color="#798BB9">
          Meetings with new client <br />
          - Tasks <br />- Repports
        </Text>
      </Box>

      <Box mt={4}>
        <Text color="white">Is something blocking you?</Text>
        <Flex mt={2}>
          <Checkbox
            isDisabled
            display="flex"
            flexDir="column"
            color="white"
            spacing="0"
            mr={2}
            icon={<></>}
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
            isChecked
          >
            N
          </Checkbox>
        </Flex>
      </Box>

      <Box mt={4}>
        <Text color="white">How confident are you?</Text>
        <Flex mt={2}>
          <Checkbox
            isDisabled
            display="flex"
            flexDir="column"
            color="white"
            spacing="0"
            mr={2}
            icon={<></>}
          >
            0
          </Checkbox>
          <Checkbox
            isDisabled
            display="flex"
            flexDir="column"
            color="white"
            spacing="0"
            mr={2}
            icon={<></>}
          >
            1
          </Checkbox>
          <Checkbox
            isDisabled
            display="flex"
            flexDir="column"
            color="white"
            spacing="0"
            mr={2}
            icon={<></>}
          >
            2
          </Checkbox>
          <Checkbox
            isDisabled
            display="flex"
            flexDir="column"
            color="white"
            spacing="0"
            mr={2}
            icon={<></>}
          >
            3
          </Checkbox>
          <Checkbox
            isDisabled
            display="flex"
            flexDir="column"
            color="white"
            spacing="0"
            mr={2}
            icon={<></>}
          >
            4
          </Checkbox>
          <Checkbox
            isDisabled
            display="flex"
            flexDir="column"
            color="white"
            spacing="0"
            mr={2}
            icon={<></>}
            isChecked
          >
            5
          </Checkbox>
        </Flex>
      </Box>
    </Box>
  );
};
