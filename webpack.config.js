const HtmlWebpackPlugin = require("html-webpack-plugin");
const Path = require("path");

module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment ? "cheap-module-source-map" : false,
    entry: "./src/index.jsx",
    output: {
      path: Path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [
            Path.resolve(__dirname, "src"),
            Path.resolve(__dirname, "node_modules")
          ],
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader"
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: Path.join(__dirname, "src", "index.html")
      })
    ]
  };
};
