const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: path.join('assets', '[name].[contenthash][ext]'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.svg$/,
                exclude: /sprite\.svg$/,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpe?g|gif|webp|avif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.pdf$/,
                include: path.resolve(__dirname, '../src'),
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            cache: true,
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html'),
            title: 'LiliiaBilous Portfolio',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../src/assets/dev-icons'),
                    to: path.resolve(__dirname, '../dist/assets/dev-icons'),
                    noErrorOnMissing: true,
                }
            ],
        }),

        new CleanWebpackPlugin(),
        new WebpackAssetsManifest({
            output: 'asset-manifest.json',
            publicPath: true,
            writeToDisk: true,
        }),
    ],
};