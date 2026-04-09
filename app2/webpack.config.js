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
    },
  },
})({
  extends: "./webpack.common.js",
});
