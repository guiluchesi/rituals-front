import { Registry, Server } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";

import { addComment } from "./addComment";

export const commentsRoutes = (
  router: Server<Registry<AnyModels, AnyFactories>>
) => {
  router.post("/comments", addComment);
};
