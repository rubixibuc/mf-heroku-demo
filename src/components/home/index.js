import { define, html } from "hybrids";
import css from "./index.css";
import frontend from "assets/front-end.png?file";

export default define({
  render: () =>
    html`<img alt="front end" src="${frontend}" /><span>
        Module Federation Demo</span
      >`.style(css),
  tag: "mfdemo-home",
});
