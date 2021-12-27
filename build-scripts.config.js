const path = require("path");

module.exports = {
  alias: {
    Assets: path.resolve(__dirname, "src/assets/"),
    Components: path.resolve(__dirname, "src/components/"),
  },
  background: "#000",
  entry: "./src/index",
  exposes: {},
  links: [
    {
      attributes: {
        rel: "preconnect",
      },
      path: "https://fonts.googleapis.com",
    },
    {
      attributes: {
        rel: "preconnect",
      },
      path: "https://fonts.gstatic.com",
    },
    {
      path: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400&display=swap",
    },
  ],
  logo: "./src/assets/front-end.png",
  metas: [],
  name: "mfdemo",
  scripts: [],
  shared: {},
  theme_color: "#fff",
  title: "MF Demo",
};
