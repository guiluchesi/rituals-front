import { useQuery } from "react-query";

import * as CommentService from "../../../service/cusdis";

export const useGetComments = ({
  id,
  page = 1,
}: {
  id: string;
  page?: number;
}) => {
  return useQuery<CommentService.GetCommentsResponse, Error>(
    "comments" + id,
    () => CommentService.getComments({ id, page }),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 /* 1 minute */,
    }
  );
};
