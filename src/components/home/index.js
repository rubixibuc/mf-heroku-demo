import { define, html } from "hybrids";
import css from "./home.css";
import frontend from "assets/front-end.png?file";

console.log(css);

export default define({
  render: () =>
    html`<img alt="front end" src="${frontend}" /><span>
        Module Federation Demo</span
      >`.style(css),
  tag: process.env.APP_NAME + "-home",
});
