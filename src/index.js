import Router from "./router";
import { ROUTES } from "./settings";
import "_styles/base.css";

document.addEventListener("DOMContentLoaded", function() {
  Router.init(ROUTES);
});
