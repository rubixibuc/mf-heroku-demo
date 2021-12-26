import { define, html } from "hybrids";
import css from "./home.css";
import frontend from "Assets/front-end.png";

const Component = {
  render: () =>
    html`<img alt="front end" src="${frontend}" /> Module Federation`.style(
      css
    ),
};

define("mfdemo-home", Component);

export default Component;
