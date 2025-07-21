const { merge } = require("webpack-merge");
const common = require("./webpack/webpack.common");

module.exports = (argv) => {
  const mode = argv.mode || "development";
  const config = require(`./webpack/webpack.${mode}.js`);
  return merge(common, config);
};
