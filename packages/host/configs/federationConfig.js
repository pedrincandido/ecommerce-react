const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    checkout: "checkout@http://localhost:8082/remoteEntry.js",
    search: "search@http://localhost:8081/remoteEntry.js",
    host: "host@http://localhost:8080/remoteEntry.js",
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
