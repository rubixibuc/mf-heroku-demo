const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  devServer: {
    static: path.join(__dirname, "dist"),
  },
  entry: "./src/index",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mf-heroku-demo",
      shared: { hybrids: deps["hybrids"] },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
