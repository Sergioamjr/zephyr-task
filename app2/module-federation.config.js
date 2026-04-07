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
    zustand: { singleton: true, strictVersion: true },
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
  },
};
