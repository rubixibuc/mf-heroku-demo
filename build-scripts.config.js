const deps = require("./package.json").dependencies;

module.exports = {
  expose: {
    "./components/home": "components/home",
  },
  logo: "./src/assets/front-end.png",
  name: "mfdemo",
  shared: {
    hybrids: deps["hybrids"],
  },
  tags: [
    {
      attributes: {
        rel: "preconnect",
      },
      path: "https://fonts.googleapis.com",
      type: "css",
    },
    {
      attributes: {
        rel: "preconnect",
      },
      path: "https://fonts.gstatic.com",
      type: "css",
    },
    {
      path: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400&display=swap",
      type: "css",
    },
  ],
  title: "MF Demo",
};
