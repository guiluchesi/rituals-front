import { StyleProps, Box, Text, Flex } from "@chakra-ui/react";

import { Comment as CommentType } from "../../service/cusdis";

interface CommentProps extends StyleProps {
  comment: CommentType["content"];
  author: CommentType["by_nickname"];
  createdAt: CommentType["createdAt"];
  replies: CommentType["replies"]["data"];
}

export const Comment = ({
  comment,
  author,
  replies,
  createdAt,
  ...rest
}: CommentProps) => {
  return (
    <Box pl={4} borderLeft="1px solid" borderLeftColor="#525F7F80" {...rest}>
      <Flex justifyContent="space-between">
        <Text color="white" fontWeight={700}>
          {author}
        </Text>
        <Text color="#525F80">
          {new Date(createdAt).toLocaleString("pt-br")}
        </Text>
      </Flex>
      <Text color="brand.200">{comment}</Text>

      {replies.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply.content}
          author={reply.by_nickname}
          replies={reply.replies.data}
          createdAt={reply.createdAt}
          ml={3}
          mt={4}
        />
      ))}
    </Box>
  );
};
