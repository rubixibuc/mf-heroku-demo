const exposes = require("./exposes.json");
const links = require("./links.json");
const deps = require("./package.json").dependencies;

module.exports = {
  exposes,
  links,
  logo: "src/images/front-end.png",
  shared: {
    hybrids: deps["hybrids"],
  },
  title: "MF Demo",
  varName: "mfdemo",
};
