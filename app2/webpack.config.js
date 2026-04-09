const { withZephyr } = require("zephyr-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

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
})(
  merge(common, {
    mode: "production",
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  }),
);
