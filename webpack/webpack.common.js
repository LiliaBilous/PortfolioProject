const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                generator: {
                    filename: 'assets/dev-icons/[name].[contenthash][ext]',
                },
            },
            {
                test: /\.(png|jpe?g|gif|webp|avif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[contenthash][ext]',
                },
            },
            {
                test: /\.pdf$/,
                include: path.resolve(__dirname, '../src'),
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name].[contenthash][ext]',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[contenthash][ext]',
                },
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new WebpackAssetsManifest({
            output: 'asset-manifest.json',
            publicPath: true,
            writeToDisk: true,
        }),
    ],
};