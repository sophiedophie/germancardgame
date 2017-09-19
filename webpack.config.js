module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
      path: __dirname + '/public/',
      filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + + '/public/',
        historyApiFallback: true,
    },
    module: {
      loaders: [
        {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']

            }
        },
      ],
   },
};
