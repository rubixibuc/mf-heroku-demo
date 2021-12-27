const path = require("path");

module.exports = {
  alias: {
    Assets: path.resolve(__dirname, "src/assets/"),
    Components: path.resolve(__dirname, "src/components/"),
  }, // webpack aliases
  background: "#000", // app meta
  exposes: {}, // module-federation exposed paths
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
  ], // injected link tags
  logo: path.resolve(__dirname, "src/assets/front-end.png"),
  metas: [], // injected meta tags
  name: "mfdemo", // module-federation var name
  scripts: [], // injected script tags
  shared: {}, // module-federation shared modues
  theme_color: "#fff", // app meta
  title: "MF Demo", // site title
};
