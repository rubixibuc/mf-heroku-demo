import { Router } from "@vaadin/router";
import css from "./routes.css";

document.adoptedStyleSheets = [css];

// noinspection JSIgnoredPromiseFromCall
new Router(document.body).setRoutes([
  {
    action: () => import("Components/home"),
    component: "mf-heroku-demo",
    path: "/",
  },
]);
