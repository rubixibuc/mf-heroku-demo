import { define, html } from "hybrids";
import css from "./home.css";
import frontend from "Assets/front-end.png";

const Component = {
  render: () =>
    html`<span
      ><img alt="front end" src="${frontend}" /> Module Federation</span
    >`.style(css),
};

define("mfdemo-home", Component);

export default Component;
