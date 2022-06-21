import {
  Textarea,
  Input,
  StyleProps,
  Box,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import { addComment, Comment as CommentType } from "../../service/cusdis";

interface AddCommentProps extends StyleProps {
  responseId: string;
  notifyTo?: string;
  handleAddComment?: (comment: Partial<CommentType>) => void;
}

export const AddComment = ({
  responseId,
  notifyTo,
  handleAddComment,
  ...rest
}: AddCommentProps) => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const allFieldsFilled = name && comment;

  const inputActions = {
    comment: setComment,
    name: setName,
  };

  const handleChange =
    (input: "comment" | "name") =>
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const action = inputActions[input];
      action(e.target.value);
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      content: comment,
      nickname: name,
      email: notifyTo,
      pageId: responseId,
      parentId: undefined,
    };

    console.log({ data, notifyTo });

    setIsLoading(true);
    const addedComment = await addComment(data);
    setIsLoading(false);

    toast({
      title: "Comment sucessfully sent!",
      status: "success",
      duration: 3500,
    });

    if (handleAddComment) {
      handleAddComment(addedComment);
    }

    Object.values(inputActions).forEach((action) => action(""));
  };

  return (
    <Box {...rest}>
      <form onSubmit={handleSubmit}>
        <Textarea
          id="comment"
          placeholder="Leave your comment"
          value={comment}
          bgColor="#525F7F4D"
          color="#798BB9"
          border="none"
          fontSize="14px"
          borderRadius="10px"
          py={3}
          minH="110px"
          onChange={handleChange("comment")}
        />
        <Flex mt={3}>
          <Input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            maxW="285px"
            bgColor="#525F7F4D"
            color="#798BB9"
            border="none"
            fontSize="14px"
            borderRadius="10px"
            onChange={handleChange("name")}
          />
          <Button
            isLoading={isLoading}
            type="submit"
            disabled={!allFieldsFilled || isLoading}
            ml={3}
            flex="1"
            fontWeight={500}
            borderRadius="10px"
            color="#fff"
            fontSize="16px"
            _disabled={{
              bg: "transparent",
              color: "#798BB966",
              border: "1px solid #6F6EFF",
              cursor: "not-allowed",
            }}
            _hover={{}}
          >
            Send Comment
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
