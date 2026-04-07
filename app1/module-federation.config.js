module.exports = {
  name: "default_webpack_mf_first",
  remotes: {
    // mf_cart: "mf_cart@http://localhost:3001/mf-manifest.json",
    mf_checkout: "mf_checkout@http://localhost:3002/mf-manifest.json",
    // mf_cart: "mf_cart@http://localhost:3003/mf-manifest.json",
  },
  exposes: {
    "./store": "./src/hooks",
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
