const webpack           = require('webpack'),
      path              = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool      : 'eval',
  // devtool : 'inline-source-map',
  cache   : true,
  context : __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/App.jsx',
  ],
  output: {
    path:  __dirname + '/build/', // Next line is not used in dev but WebpackDevServer crashes without it:
    pathinfo: true, // Add /* filename */ comments to generated require()s in the output.
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js', // There are also additional JS chunk files if you use code splitting.
    publicPath: '/', // This is the URL that app is served from. We use "/" in development.
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'react-hot-loader', 'babel-loader' ],
        exclude: /(node_modules)/,
      },
      {
        test   : /\.js$/,
        loaders: [ 'react-hot-loader', 'babel-loader' ],
        include: path.join(__dirname, 'node_modules', 'redux-devtools', 'src')
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '__[hash:base64:5]'
            }
          },
          'stylus-loader'
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    // // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(), // This is necessary to emit hot updates (currently CSS only):
    new webpack.NamedModulesPlugin()
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false,
  },
};
