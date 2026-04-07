module.exports = {
  name: "default_webpack_mf_first",
  remotes: {
    // mf_cart: "mf_cart@http://localhost:3001/mf-manifest.json",
    default_webpack_mf_second:
      "default_webpack_mf_second@http://localhost:3002/mf-manifest.json",
    mf_cart: "mf_cart@http://localhost:3003/mf-manifest.json",
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
    },
    "react-icons": {
      singleton: true,
    },
    tailwindcss: {
      singleton: true,
    },
  },
};
