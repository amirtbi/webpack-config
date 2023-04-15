const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VuetifyPlugin } = require("webpack-plugin-vuetify");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const htmlWebpack = require("html-webpack-plugin");
// const CacheLoader = require("cache-loader");
// const { SwcMinifyWebpackPlugin } = require("swc-minify-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { VueLoaderPlugin } = require("vue-loader");

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

// const webpack = require("webpack");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

// Config
const config = {
  // devtool: "source-map",
  mode: "production",
  cache: true,
  performance: {
    maxEntrypointSize: 4000000,
    maxAssetSize: 2000000,
  },
  // Plugins
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),

    new htmlWebpack({
      title: "Home page",
      template: "/src/index.html",
      filename: "index.html",
    }),

    new VueLoaderPlugin(),
    new VuetifyPlugin(),
    new CssMinimizerPlugin(),
    // new CacheLoader(),
    new BundleAnalyzerPlugin(),
  ],

  entry: {
    index: "./src/main.js",
  },

  // Ouput
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "build"),
  },

  // module
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015",
        },

        // use: [
        //   {
        //     loader: "cache-loader",
        //   },
        //   {
        //     loader: "esbuild-loader",
        //     options: {
        //       // loader: "tsx",
        //       target: "es2015",
        //       minify: true,
        //       cacheCompression: false,
        //       cacheDirectory: true,
        //     },
        //   },
        // ],
      },

      {
        test: /\.vue$/,
        loader: "vue-loader",
      },

      // Store css files in specific  separare file
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      // Load and optimize images with different formats
      {
        test: /\.(jp?g|png|gif)$/,
        type: "asset/resource",

        generator: {
          publicPath: "assets/images/",
          outputPath: "assets/images/",
          filename: "[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          publicPath: "assets/fonts/",
          outputPath: "assets/fonts/",
          filename: "[name][ext]",
        },
      },
    ],
  },
  devServer: {
    hot: true,
    port: 5004,
    liveReload: true,
    watchFiles: ["build/**/*"],
    devMiddleware: {
      publicPath: "/build/",
    },
    static: {
      directory: path.resolve(__dirname, "build"),
      watch: true,
    },
    open: ["./build/index.htm"],
  },
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "async",
        },
      },
    },
  },
};

module.exports = {
  ...config,

  cache: {
    type: "filesystem",
    cacheLocation: path.resolve(__dirname, ".test_cache"),
    compression: "gzip",
  },
};
