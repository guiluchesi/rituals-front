import { Registry, Server } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";

import { addComment } from "./addComment";
import { getComments } from "./getComments";

export const commentsRoutes = (
  router: Server<Registry<AnyModels, AnyFactories>>
) => {
  router.get("/comments", getComments);
  router.post("/comments", addComment);
};
