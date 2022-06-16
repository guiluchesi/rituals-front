import { Registry, Server } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";

import { getRituals } from "./rituals";
import { getResponses } from "./responses";
import { getAnalytics } from "./analytics";

export const ritualsRoutes = (
  router: Server<Registry<AnyModels, AnyFactories>>
) => {
  router.get("/rituals", getRituals);
  router.get("/rituals/:id/responses", getResponses);
  router.get("/rituals/:id/analytics", getAnalytics);
};
