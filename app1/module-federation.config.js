module.exports = {
  name: "default_webpack_mf_first",
  remotes: {
    mf_checkout: "mf_checkout@http://localhost:3002/mf-manifest.json",
    mf_order: "mf_order@http://localhost:3003/mf-manifest.json",
  },
  exposes: {
    "./hooks": "./src/hooks",
    "./utils": "./src/utils",
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
    tailwindcss: {
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
