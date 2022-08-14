const path = require("path");
const config = require("./webpack.config.js");
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(config, {
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./docs")
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ] 
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader" 
        ]
      }
    ]
  }
});