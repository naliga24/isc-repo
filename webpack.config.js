const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const webpack = require('webpack');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },

      {
        test: /\.(jpg|png)$/,
        use:
          [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath:'/img',
                publicPath:'/img'
              }
            }
          ]
      },
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.mp4/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10000,
            mimtetype: 'video/mp4',
          }
        }
      },
      {
        test: /\.MOV/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10000,
            mimtetype: 'video/MOV',
          }
        }
      },
      {
        test: /\.webm/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10000,
            mimtetype: 'video/webm',
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader?attrs[]=video:src'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })

  ]
};