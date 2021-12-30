import "./routes.css?style";
import { Router } from "@vaadin/router";

// noinspection JSIgnoredPromiseFromCall
new Router(document.body).setRoutes([
  {
    action: () => import("components/home"),
    component: "mfdemo-home",
    path: "/",
  },
]);
