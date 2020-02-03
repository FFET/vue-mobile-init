const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.less|css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ["file-loader"]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.join(__dirname, "..", "src")
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([{ from: "src/json/", to: "json/" }]),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};
