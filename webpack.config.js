const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/inline",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(pdf)$/,
        include: path.resolve(__dirname, "src"),
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "",
      filename: "index.html",
      template: path.resolve(__dirname, "index.html"),
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets"),
          to: path.resolve(__dirname, "./dist/assets"),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
