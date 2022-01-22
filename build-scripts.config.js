const exposes = require("./exposes.json");
const links = require("./links.json");
const metas = require("./metas.json");
const deps = require("./package.json").dependencies;

module.exports = {
  exposes,
  links,
  logo: "src/images/front-end.png",
  metas,
  shared: {
    hybrids: deps["hybrids"],
  },
  title: "MF Demo",
  varName: "mfdemo",
};
