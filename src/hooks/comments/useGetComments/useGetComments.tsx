import * as CommentService from "../../../service/cusdis";

export const getComments = ({
  id,
  page = 1,
}: {
  id: string;
  page?: number;
}) => {
  return CommentService.getComments({ id, page });
};
