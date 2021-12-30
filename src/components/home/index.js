import { define, html } from "hybrids";
import css from "./home.css";
import frontend from "assets/front-end.png";

const Component = {
  render: () =>
    html`<img alt="front end" src="${frontend}" /><span>
        Module Federation Demo</span
      >`.style(css),
};

define("mfdemo-home", Component);

export default Component;
