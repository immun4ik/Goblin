const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// Новые плагины для продакшена
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
 
    mode: isProduction ? 'production' : 'development',

    
    devtool: isProduction ? 'source-map' : 'eval-source-map',

    entry: './src/index.js',

    output: {
        filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: isProduction ? './' : '/',
    },

    
    devServer: {
       
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
       
        open: true,
        port: 9000,
        hot: true,
        compress: true,
    },

    
    module: {
        rules: [
            {
               
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', 
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource', 
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
        ],
    },

   
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: isProduction ? {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
            } : false,
        }),
        new ESLintPlugin({
            extensions: ['js'], 
            exclude: 'node_modules',
        }),
        isProduction && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
    ].filter(Boolean),

    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({
            }),
            new CssMinimizerPlugin(),
        ],

    },

   
    resolve: {
        extensions: ['.js', '.json'],
        
    },
};