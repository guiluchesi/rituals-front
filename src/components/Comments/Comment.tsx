import { StyleProps, Box, Text } from "@chakra-ui/react";

import { Comment as CommentType } from "../../service/cusdis";

interface CommentProps extends StyleProps {
  comment: CommentType["content"];
  author: CommentType["by_nickname"];
  replies: CommentType["replies"]["data"];
}

export const Comment = ({
  comment,
  author,
  replies,
  ...rest
}: CommentProps) => {
  return (
    <Box pl={4} borderLeft="1px solid" borderLeftColor="#525F7F80" {...rest}>
      <Text color="white" fontWeight={700}>
        {author}
      </Text>
      <Text color="brand.200">{comment}</Text>

      {replies.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply.content}
          author={reply.by_nickname}
          replies={reply.replies.data}
          ml={3}
          mt={4}
        />
      ))}
    </Box>
  );
};
