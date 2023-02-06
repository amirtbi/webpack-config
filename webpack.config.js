const path = require("path");
const htmlWebpack = require("html-webpack-plugin");

const config = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ["file-loader"],
      },
    ],
    plugins: [new htmlWebpack()],
    devServer: {
      port: 9001,
    },
  },
};

module.exports = config;
