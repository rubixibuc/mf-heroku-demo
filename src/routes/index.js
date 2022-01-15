import "./routes.css?style";
import { Router } from "@vaadin/router";

// noinspection JSIgnoredPromiseFromCall
new Router(document.getElementById("root")).setRoutes([
  {
    action: () => import("components/home"),
    component: process.env.APP_NAME + "-home",
    path: "/",
  },
]);
