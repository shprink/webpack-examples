var webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    entry: {
        main: './index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.es6.js$/,
            loader: "babel-loader"
        }, {
            test: /\.coffee$/,
            loader: "coffee-loader"
        }, {
            test: /\.css$/,
            loader: "css-loader!autoprefixer-loader"
        }, {
            test: /\.scss$/,
            loader: "css-loader!sass-loader"
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "file-loader?name=img/img-[hash:6].[ext]"
        }]
    }
};