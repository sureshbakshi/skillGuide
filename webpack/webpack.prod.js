

'use strict';
const loaders = require('./utils/loaders');
const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '../www'),
        filename: './js/[name].[hash:6].js',
        publicPath: '/',
        sourceMapFilename: './js/[name].[hash:6].js.map',
        chunkFilename: '.js/[id].chunk.js',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    resolve: {
        extensions: [
            '',
            '.webpack.js',
            '.web.js',
            '.tsx',
            '.ts',
            '.js',
            '.json',
        ],
    },


    module: {
        preLoaders: [
            loaders.tslint,
        ],
        loaders: [
            loaders.tsx,
            loaders.html,
            loaders.css,
            loaders.svg,
            loaders.eot,
            loaders.woff,
            loaders.woff2,
            loaders.ttf,
            loaders.json,
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: false,
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'APP_VERSION': JSON.stringify('v1.0.0')
            }
        }),
        new HtmlWebpackPlugin({
            template: './assets/html/index.html',
            inject: 'body',
        }),
        new webpack.NoErrorsPlugin(),
        new SplitByPathPlugin([
            { name: 'vendor', path: [path.join(__dirname, '..', 'node_modules/')] },
        ]),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        })
    ]
};
