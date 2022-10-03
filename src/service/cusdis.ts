const baseUrl = "https://cusdis.com/api/open";
const appId = "3896125a-c074-4577-9530-19838d9ba62e";

export interface CommentCreation {
  appId: string;
  pageId: string;
  content: string;
  email: string;
  nickname: string;
  parentId: string;
}

export interface Comment {
  by_nickname: string;
  content: string;
  createdAt: string;
  id: string;
  moderator: null;
  moderatorId: null;
  page: {
    createdAt: string;
    id: string;
    projectId: string;
    slug: string;
    title: null;
    updatedAt: string;
    url: null;
  };
  parsedContent: string;
  parsedCreatedAt: string;
  replies: {
    data: Comment[];
    commentCount: number;
    pageSize: number;
    pageCount: number;
  };
}

export interface GetCommentsResponse {
  commentCount: number;
  data: Comment[];
  pageCount: number;
  pageSize: number;
}

export interface AddCommentResponse {
  approved: boolean;
  by_email: string;
  by_nickname: string;
  content: string;
  createdAt: string;
  deletedAt: null;
  id: string;
  moderatorId: null;
  pageId: string;
  parentId: null;
  updatedAt: string;
}

export interface CusdisWebhook {
  type: string;
  data: {
    by_nickname: string;
    by_email: string;
    content: string;
    page_id: string;
    page_title: string | null;
    project_title: string;
    approve_link: string;
  };
}

interface ApproveCommentResponse {
  message: string;
}

export const getComments = async ({
  id,
  page = 1,
  skipPagination,
}: {
  id: string;
  page: number;
  skipPagination?: boolean;
}): Promise<GetCommentsResponse> => {
  const { data: commentsData } = await fetch(
    `${baseUrl}/comments?page=${page}&appId=${appId}&pageId=${id}`
  ).then((res) => res.json());

  if (
    commentsData?.pageCount > 1 &&
    page <= commentsData?.pageCount &&
    !skipPagination
  ) {
    const [_, ...pages] = Array.from(
      { length: commentsData.pageCount },
      (_, i) => i + 1
    );

    const allCommentsPromise = pages.map(async (pageNum) => {
      const { data: newComments } = await getComments({
        id,
        page: pageNum,
        skipPagination: true,
      });

      return newComments;
    });

    const allComments = await Promise.all(allCommentsPromise);
    commentsData.data = [...commentsData.data, ...allComments.flat()];
  }

  return commentsData;
};

export const getCommentsCount = async (ids: string[]) => {
  const pageIds = ids.join(",");

  const { data: commentsCount } = await fetch(
    `${baseUrl}/project/${appId}/comments?pageId=${pageIds}`
  ).then((res) => res.json());

  return commentsCount;
};

export const addComment = async ({
  pageId,
  email,
  nickname,
  content,
  parentId,
}: Partial<CommentCreation>): Promise<Partial<Comment>> => {
  const comment = {
    appId,
    content,
    email,
    nickname,
    pageId,
    parentId,
  };

  const { data: createdComment } = await fetch(`${baseUrl}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  }).then((res): Promise<{ data: AddCommentResponse }> => res.json());

  return createdComment;
};

export const approveComment = async (
  hookData: CusdisWebhook["data"]
): Promise<any> => {
  const tokenMatches = hookData.approve_link.match(/token=([^&]*)/);
  const token = tokenMatches ? tokenMatches[1] : "";
  const route = `${baseUrl}/approve?token=${token}`;

  const { data } = await fetch(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res): Promise<{ data: ApproveCommentResponse }> => res.json());

  return data.message === "success";
};
