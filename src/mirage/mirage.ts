import { createServer } from "miragejs";

import { ritualsRoutes, commentsRoutes } from "./routes";

if (import.meta.env.DEV && import.meta.env.VITE_MIRAGE_ACTIVE === "true") {
  createServer({
    routes() {
      this.urlPrefix = import.meta.env.VITE_API_PATH ?? "http://localhost:8000";

      ritualsRoutes(this);
      commentsRoutes(this);
    },
  });
}
