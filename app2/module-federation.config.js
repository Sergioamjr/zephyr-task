module.exports = {
  name: "default_webpack_mf_second",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App",
  },
  remotes: {
    default_webpack_mf_first:
      "default_webpack_mf_first@http://localhost:3001/remoteEntry.js",
  },
  shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
    "react-router-dom": {
      singleton: true,
    },
    zustand: {
      singleton: true,
      requiredVersion: "^5.0.12",
    },
    "react-icons": {
      singleton: true,
    },
    "lottie-web": {
      singleton: true,
    },
  },
};
