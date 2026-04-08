const HtmlWebpackPlugin = require("html-webpack-plugin");
const { withZephyr } = require("zephyr-webpack-plugin");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const path = require("path");
const mfConfig = require("./module-federation.config");

module.exports = withZephyr({
  hooks: {
    onDeployComplete: async (deploymentInfo) => {
      console.log("🚀 Deployment Complete!");
      console.log(`   URL: ${deploymentInfo.url}`);
      console.log(`   Module: ${deploymentInfo.snapshot.uid.app_name}`);
      console.log(`   Build ID: ${deploymentInfo.snapshot.uid.build}`);
      console.log(
        `   Dependencies: ${deploymentInfo.federatedDependencies.length}`,
      );
      console.log(
        `   Git: ${deploymentInfo.snapshot.git.branch}@${deploymentInfo.snapshot.git.commit}`,
      );
      console.log(
        `   CI: ${deploymentInfo.buildStats.context.isCI ? "Yes" : "No"}`,
      );

      console.log("Build Stats:", deploymentInfo.buildStats);

      if (deploymentInfo.buildStats.context.isCI) {
        console.log("creting deploy-url.txt for CI environment");
        const fs = require("fs");
        const path = require("path");
        fs.writeFileSync(
          path.resolve(__dirname, "../deploy-url.txt"),
          deploymentInfo.url,
        );
      }
    },
  },
})({
  entry: "./src/index",
  mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    static: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: true,
  },
  watchOptions: {
    ignored: ["./@mf-types/*", "./dist/*", "./node_modules/*"],
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
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
});
