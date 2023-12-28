const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "checkout",
  filename: "remoteEntry.js",
  // remotes: {
  //   host: "host@http://localhost:3000/remoteEntry.js",
  // },
  exposes: {
    "./ShoppingCart": "./src/components/ShoppingCart",
    "./store": "./src/store/store",
    "./cartSlice": "./src/store/cartSlice",
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
      requiredVersion: "^6.1.3",
    },
  },
};
