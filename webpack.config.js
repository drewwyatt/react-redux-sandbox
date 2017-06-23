const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        path.resolve('./src/index.tsx')
    ],
    output: {
        path: path.resolve('./dist'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    'babel-loader',
                    'awesome-typescript-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve('./src/index.html') }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
        modules: ['src', 'node_modules'],
    }
}