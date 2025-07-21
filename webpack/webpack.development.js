module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: './dist',
        },
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
};