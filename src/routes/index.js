import { Router } from "@vaadin/router";
import "./routes.css?style";

// noinspection JSIgnoredPromiseFromCall
new Router(document.body).setRoutes([
  {
    action: () => import("Components/home"),
    component: "mfdemo-home",
    path: "/",
  },
]);
