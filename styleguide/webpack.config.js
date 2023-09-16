const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require('path');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ist",
    projectName: "styleguide",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        // { 
        //   test: /\.css$/, 
        //   use: ["style-loader", "css-loader"],
        //   include: path.resolve(__dirname, './src')
        // },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' }
        }
      ],
    },
  });
};
