const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  devServer: {
    port: 3000,
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "css-loader",
            options: {
              exportType: "css-style-sheet",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env", "autoprefixer"],
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      exposes: {
        "./components/home": "Components/home",
      },
      filename: "remoteEntry.js",
      name: "mf_heroku_demo",
      shared: { hybrids: deps["hybrids"] },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, "src/assets/"),
      Components: path.resolve(__dirname, "src/components/"),
    },
  },
};
