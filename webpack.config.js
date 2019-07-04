const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");
const fs = require("fs");
const md = require("markdown-it")();

const bioMarkdown = fs.readFileSync("./src/content/bio.md", "utf-8");
const bioHTML = md.render(bioMarkdown);

const isDevEnv = () => {
  if (process.env.NODE_ENV === "production") {
    return false;
  }
  return true;
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  devtool: isDevEnv() && "inline-source-map",
  devServer: {
    contentBase: "./",
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: path.resolve(process.cwd())
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new NunjucksWebpackPlugin({
      configure: {
        options: {
          autoescape: false
        }
      },
      templates: [
        {
          from: "src/views/index.njk",
          to: "index.html",
          context: {
            name: "Kaluã Bentes"
          }
        },
        {
          from: "src/views/bio.njk",
          to: "bio.html",
          context: {
            bio: bioHTML
          },
          configure: {
            options: {
              autoescape: false
            }
          }
        }
      ]
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    publicPath: "/"
  },
  resolve: {
    alias: {
      _styles: path.resolve(__dirname, "src/styles"),
      _pages: path.resolve(__dirname, "src/pages"),
      _components: path.resolve(__dirname, "src/components")
    }
  }
};
