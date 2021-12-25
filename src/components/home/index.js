import { define, html } from "hybrids";
import css from "./home.css";
import frontend from "Assets/front-end.png";

const Component = {
  render: () =>
    html`<h1>
      <img alt="front-end" src="${frontend}" /> mf-heroku-demo
    </h1>`.style(css),
};

define("mf-heroku-demo", Component);

export default Component;
