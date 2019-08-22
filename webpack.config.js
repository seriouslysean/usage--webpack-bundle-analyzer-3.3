const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        'app.bundle': path.resolve('src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /src\/\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        }],
    },
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
};
