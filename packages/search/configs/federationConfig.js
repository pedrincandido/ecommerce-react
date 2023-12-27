const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "search",
  filename: "remoteEntry.js",
  remotes: {
    checkout: "checkout@http://localhost:3010/remoteEntry.js",
    search: "search@http://localhost:3020/remoteEntry.js",
    host: "host@http://localhost:3000/remoteEntry.js",
  },
  exposes: {
    "./Search": "./src/components/SearchContent",
    "./Routers": "./src/Routers",
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
    "styled-components": {
      singleton: true,
      requiredVersion: '^6.1.3'
    },
  },
};
