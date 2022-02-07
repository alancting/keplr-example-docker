const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    sourceMapFilename: "[name].js.map",
  },
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
    },
  },
  devtool: "source-map",
};
