import { define, html } from "hybrids";

const Component = {
  render: () => html`<style>
      h1 {
        border: 1px dotted #ccf;
        text-align: center;
      }
    </style>
    <h1>mf-heroku-demo</h1>`,
};

define("mf-heroku-demo", Component);

export default Component;
