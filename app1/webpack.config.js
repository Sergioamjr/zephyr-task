const { withZephyr } = require("zephyr-webpack-plugin");

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

      // if (deploymentInfo.buildStats.context.isCI) {
      // console.log("creting deploy-url.txt for CI environment");
      // const fs = require("fs");
      // const path = require("path");
      // fs.writeFileSync(
      //   path.resolve(__dirname, "../deploy-url.txt"),
      //   deploymentInfo.url,
      // );
      // }
    },
  },
})({
  extends: "./webpack.common.js",
});
