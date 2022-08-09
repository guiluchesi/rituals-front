import { createServer } from "miragejs";

import { ritualsRoutes, commentsRoutes } from "./routes";

if (process.env.DEV && process.env.VITE_MIRAGE_ACTIVE === "true") {
  createServer({
    routes() {
      this.urlPrefix = process.env.VITE_API_PATH ?? "http://localhost:8000";

      ritualsRoutes(this);
      commentsRoutes(this);
    },
  });
}
