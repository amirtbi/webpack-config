const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpack = require("html-webpack-plugin");
const config = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new htmlWebpack(),
  ],
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/",
  },

  module: {
    rules: [
      // Define Rulesets
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", { targets: "defaults" }]],
        },
      },

      // Store css files in specific  separare file
      {
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        test: /\.(css|scss)$/,
      },

      // Load and optimize images with different formats
      {
        test: /\.(jp?g|png|gif)$/,

        type: "asset/resource",
        generator: {
          publicPath: "build/assets/images/",
          outputPath: "assets/images/",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          publicPath: "build/assets/fonts/",
          outputPath: "assets/fonts/",
        },
      },
    ],
  },
};

module.exports = config;
