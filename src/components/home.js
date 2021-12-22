import { define, html } from "hybrids";
import frontend from "../images/front-end.png";

const Component = {
  render: () => html`<style>
      h1 {
        border: 1px dotted #ccf;
        text-align: center;
      }

      img {
        height: 1em;
        vertical-align: middle;
      }
    </style>
    <h1><img alt="front-end" src="${frontend}" /> mf-heroku-demo</h1>`,
};

define("mf-heroku-demo", Component);

export default Component;
