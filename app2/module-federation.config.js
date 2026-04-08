module.exports = {
  name: "mf_checkout",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App",
  },
  remotes: {
    default_webpack_mf_first:
      "default_webpack_mf_first@http://localhost:3001/mf-manifest.json",
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
    uuid: {
      singleton: true,
    },
  },
};
