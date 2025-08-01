const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.png/,
                type: 'asset/resource',
            },
            {
                test: /\.js/,
                use: 'babel-loader',
            },
            {
                test: /\.txt$/,
                type: 'asset/source',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                template: './src/index.html',
                filename: './index.html',
            },
        ),
        new MiniCssExtractPlugin(
            {
                filename: '[name].css',
            },
        ),
        new CleanWebpackPlugin(),
    ],
};