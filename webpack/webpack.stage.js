const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    // Actual file entry 
    entry: {
        index: './src/index.tsx',
        // don't add lodash here
        vendor: ['react', 'redux', 'moment', 'react-dom',
            'react-redux', 'immutable', 'redux-persist']
    },

    devtool: "source-map", // enum
    // enhance debugging by adding meta info for the browser devtools
    // source-map most detailed at the expense of build speed.


    // devServer: {
    //     proxy: { // proxy URLs to backend development server
    //         '/api': 'http://0.0.0.0:3000'
    //     },
    //     contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    //     compress: true, // enable gzip compression
    //     historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    //     hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    //     https: false, // true for self-signed, object for cert authority
    //     noInfo: true, // only errors & warns on hot reload
    // },

    // out put file 
    output: {
        path: path.resolve(__dirname, "./../vs_deploy"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: './js/[name].[hash:6].js',
        // the filename template for entry chunks
        sourceMapFilename: './js/[name].[hash:6].js.map',
        chunkFilename: './js/[id].chunk.js',
    },

    resolve: {
        // list of extensions that has to be resolved automatically. With this options there is no need of adding file extension while importing
        extensions: [

            '.tsx',
            '.ts',
            '.js',
            '.json',
            '.scss',
            '.css'
        ],
    },
    module: {
        // define loaders here
        rules: [{
            // Typescript loader
            test: /\.(ts|tsx|js|jsx)$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            //SCSS loader
            test: /\.scss$/,
            include: path.join(__dirname, '../assets/scss'),
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            // CSS loader
            test: /\.css$/,
            use: [
                'style-loader?./css/[name].[hash:6].[ext]',
                'css-loader?name=./css/[name].[hash:6].[ext]'
            ]
        },
        {
            // Images loader
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader?name=./images/[name].[hash:6].[ext]'
            ]
        },
        {
            // Fonts laoder
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader?name=./fonts/[name].[hash:6].[ext]'
            ]
        },
        {
            // CSV and TSV  loader
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader?name=./app_data/[name].[hash:6].[ext]'
            ]
        },
        {
            //  XML Loader
            test: /\.xml$/,
            use: [
                'xml-loader?name=./app_data/[name].[hash:6].[ext]'
            ]
        },
        {
            //  JSON Loader
            test: /\.json$/,
            use: [
                'file-loader?name=./app_data/[name].[hash:6].[ext]'
            ]
        }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
        // inject HTML
        new HtmlWebpackPlugin({
            inject: 'body', // Inject all assets 
            template: './assets/html/index.html',
            chunkhash: true // append a unique webpack compilation chunkhash to all included scripts and CSS files. This is useful for cache busting.
        }),

        // ENV variables
        new webpack.DefinePlugin({
            __DEV__: true,
            'process.env': {
                'NODE_ENV': JSON.stringify('stage'),
                'APP_VERSION': JSON.stringify('0.0.1'),
                'API_DOMAIN': JSON.stringify('API URL HERE'),

            }
        }),
        new webpack.BannerPlugin({
            banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
        }),
        new ExtractTextPlugin("css/app.[hash:6].css"),

    ]
};
