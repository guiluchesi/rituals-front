import { StyleProps, Box, Text, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Comment as CommentType } from "../../service/cusdis";
import { AddComment } from "./AddComment";
import { Comment } from "./Comment";
import { Comment as CommentIcon } from "../../assets/icons/comments";

interface CommentsProps extends StyleProps {
  comments: Partial<CommentType>[];
  responseId: string;
}

const getCommentsCountLabel = (commentCount: number) => {
  if (commentCount === 1) {
    return "1 Comment";
  }

  if (commentCount > 1) {
    return `${commentCount} Comments`;
  }

  return "No comments yet";
};

export const Comments = ({
  comments,
  color,
  responseId,
  ...rest
}: CommentsProps) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentList, setCommentList] = useState(comments);

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  const handleAddComment = (newComment: Partial<CommentType>) => {
    setCommentList([newComment, ...commentList]);
    setShowCommentForm(false);
  };

  return (
    <Box color={color} {...rest}>
      <Flex
        borderBottom="1px solid"
        borderBottomColor={color ?? "brand.200"}
        py={2}
        mb={6}
      >
        <CommentIcon transform="translateY(4px)" />
        <Text ml={2}>{getCommentsCountLabel(commentList.length)}</Text>
      </Flex>

      {commentList.map((comment, index) => (
        <Comment
          key={comment.id}
          comment={comment.content ?? ""}
          author={comment.by_nickname ?? ""}
          replies={comment?.replies?.data ?? []}
          mt={index === 0 ? 0 : 4}
        />
      ))}

      <Box
        mt={6}
        pl={4}
        borderLeft="1px solid"
        borderLeftColor="#525F7F80"
        w={["100%", "475px", "500px"]}
      >
        {showCommentForm ? (
          <AddComment
            responseId={responseId}
            mt={6}
            handleAddComment={handleAddComment}
          />
        ) : (
          <Button
            bgColor="#525F7F4D"
            color="#798BB980"
            fontWeight={400}
            p="10px 17px"
            justifyContent="flex-start"
            onClick={() => setShowCommentForm(true)}
          >
            Leave a comment here
          </Button>
        )}
      </Box>
    </Box>
  );
};
