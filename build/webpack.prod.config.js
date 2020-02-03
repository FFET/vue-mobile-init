const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "js/[name].[hash:6].js",
    chunkFilename: "js/[name].[hash:6].js",
    path: path.resolve(__dirname, "../dist")
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
          MiniCssExtractPlugin.loader,
          // "vue-style-loader",
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
        test: /\.(png|svg|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100,
              name: "image/[hash:6].[ext]"
              // outputPath: "image/",
              // publicPath: ".."
            }
          }
        ]
      }
      // {
      //   test: /\.(png|svg|jpg|gif|jpeg)$/,
      //   use: ["file-loader"]
      // }
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
    new CleanWebpackPlugin({}),
    new CopyPlugin([{ from: "src/json/", to: "json/" }]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[contenthash].css",
      chunkFilename: "css/[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};
