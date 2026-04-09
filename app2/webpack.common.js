require("dotenv").config();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const path = require("path");
const mfConfig = require("./module-federation.config");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    static: path.join(__dirname, "dist"),
    port: 3002,
    hot: false,
  },
  output: {
    publicPath: "auto",
  },
  watchOptions: {
    ignored: ["./@mf-types/*", "./dist/*", "./node_modules/*"],
    followSymlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Allows omitting extensions in imports
  },
  devtool: "inline-source-map",
  plugins: [
    new ModuleFederationPlugin(mfConfig),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
