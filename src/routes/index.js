import "./routes.css?style";
import { Router } from "@vaadin/router";

// noinspection JSIgnoredPromiseFromCall
new Router(document.getElementById("root")).setRoutes([
  {
    action: () => import("components/home"),
    component: "mfdemo-home",
    path: "/",
  },
]);
