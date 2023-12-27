const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    checkout: "checkout@http://localhost:3001/remoteEntry.js",
    search: "search@http://localhost:3002/remoteEntry.js",
    host: "host@http://localhost:3000/remoteEntry.js",
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
