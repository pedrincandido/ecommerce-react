const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "search",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
