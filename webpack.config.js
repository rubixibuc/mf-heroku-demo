const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

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
        test: /\.js$/i,
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
              importLoaders: 1,
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
    assetModuleFilename: "[name].[contenthash][ext][query]",
    clean: true,
    filename: "[name].[contenthash].js",
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      exposes: {
        "./components/home": "Components/home",
      },
      filename: "remoteEntry.js",
      name: "mfdemo",
      shared: { hybrids: deps["hybrids"] },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      title: "mfdemo",
    }),
    new HtmlWebpackTagsPlugin({
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
    }),
    new FaviconsWebpackPlugin({
      favicons: {
        background: "#000",
        theme_color: "#fff",
      },
      logo: "./src/assets/front-end.png",
      prefix: "[contenthash]/",
    }),
  ],
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, "src/assets/"),
      Components: path.resolve(__dirname, "src/components/"),
    },
  },
};
