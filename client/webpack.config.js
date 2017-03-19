var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackDevServer = require('webpack-dev-server')

var config = {
  devtool: 'eval-source-map',
  context: __dirname + "/app",
  entry: [
    'webpack-dev-server/client?http://localhost:14000',
    'webpack/hot/only-dev-server',
    //'react-hot-loader/patch',
    './app.iced'
  ],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {test:/\.iced|\.coffee$/,loader:"iced-coffee-loader"},
      {test:/\.json$/,loader:"json"},
      {test:/\.styl|\.css$/,loader:'style-loader!css-loader!stylus-loader'},
      {
        test: /\.hbs$|\.html$|\.handlebars$/,
        loader: "handlebars-loader",
        query: {
          partialDirs: [
            __dirname + '/app/views',
          ],
        },
      },
    ],
  },
  plugins: [
    (new webpack.BannerPlugin(JSON.stringify({
      version: require('funny-versions').generate(),
      ctime: Math.round(new Date().getTime()/1000),
    }))),
    (new HtmlWebpackPlugin({
      title: null,
      minify: {collapseWhitespace:true},
      template: __dirname + '/app/index.html',
    })),
    (new webpack.optimize.UglifyJsPlugin({minimize:true})),
    (new webpack.HotModuleReplacementPlugin()),
    (new webpack.NoErrorsPlugin()),
    (new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })),
  ],
}

module.exports = config

