import { Request } from "miragejs";

export const addComment = (_: any, request: Request) => {
  const body = request.requestBody ?? "";
  const createdComment = JSON.parse(body);
  return { data: createdComment };
};
