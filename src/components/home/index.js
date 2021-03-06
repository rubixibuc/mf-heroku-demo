import { define, html } from "hybrids";
import css from "./scoped.css?string";
import frontend from "images/front-end.png?file";

export default define({
  render: () =>
    html`<img alt="front end" src="${frontend}" /><span>
        Module Federation Demo</span
      >`.style(css),
  tag: "mfdemo-home",
});
