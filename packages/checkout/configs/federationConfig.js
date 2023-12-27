const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "checkout",
  filename: "remoteEntry.js",
  remotes: {
    checkout: "checkout@http://localhost:3001/remoteEntry.js",
    search: "search@http://localhost:3002/remoteEntry.js",
    host: "host@http://localhost:3000/remoteEntry.js",
  },
  exposes: {
    './ShoppingCart': './src/components/ShoppingCart',
    "./store": "./src/store/store",
    "./cartSlice": "./src/store/cartSlice",
    './routers': './src/routers'
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
