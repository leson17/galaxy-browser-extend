/* eslint-disable @typescript-eslint/no-var-requires */
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  pages: {
    popup: {
      template: "public/popup.html",
      entry: "./src/main.ts",
      title: "index"
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve("src/plugins/plugin-chrome.js"),
            to: path.resolve("dist/js")
          }
        ]
      })
    ]
  }
};
