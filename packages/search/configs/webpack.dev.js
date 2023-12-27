const path = require("path");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3020,
    liveReload: false,
    hot: true,
    open: true,
    compress: false,
    historyApiFallback: true,
  },
});
