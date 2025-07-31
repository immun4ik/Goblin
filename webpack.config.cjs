const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    entry: './src/index.js',

    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },

    
    devServer: {
        static: './dist',
        open: true,
        port: 9000,
        hot: true,
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
                    },
                },
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'], 
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, 
                type: 'asset/resource', 
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
        ],
    },

    plugins: [
        
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new ESLintPlugin({
            extensions: ['js'], 
            exclude: 'node_modules',
        }),
    ],

    
    resolve: {
        extensions: ['.js', '.json'], 
    },
};