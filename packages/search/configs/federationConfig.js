const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "search",
  filename: "remoteEntry.js",
  remotes: {
    checkout: "checkout@http://localhost:3001/remoteEntry.js",
    search: "search@http://localhost:3002/remoteEntry.js",
    host: "host@http://localhost:3000/remoteEntry.js",
  },
  exposes: {
    "./Search": "./src/components/SearchContent",
    './routers': './src/routers',
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
