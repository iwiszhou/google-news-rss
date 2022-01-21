import { googleNewsRssHandler } from "./controller/google-news.controller.js";

export function allRoutes(app) {
  app.get("/news", googleNewsRssHandler);
}
