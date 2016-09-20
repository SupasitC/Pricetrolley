const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const babelrc = fs.readFileSync('./.babelrc');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// App files location
const PATHS = {
    app: path.join(__dirname, '../src'),
    appHtml: path.resolve(__dirname, '../src/index.html'),
    styles: path.join(__dirname, '../src/styles'),
    build: path.join(__dirname, '../build')
};
const HOST = (process.env.HOST || 'localhost');
const PORT = (process.env.PORT || 8080);

const plugins = [
    new HtmlWebpackPlugin({
        inject: true,
        // title: appName,
        template: PATHS.appHtml,
    }),
    // Shared code
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    new webpack.optimize.OccurenceOrderPlugin()
];

const sassLoaders = [
    'style-loader',
    'css-loader?sourceMap',
    'postcss-loader',
    'sass-loader?outputStyle=expanded'
];

module.exports = {
    env: process.env.NODE_ENV,
    entry: {
        app: path.resolve(PATHS.app, 'main.js'),
        vendor: ['react']
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
        publicPath: 'http://' + HOST + ':' + PORT + '/'
    },
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        // We can now require('file') instead of require('file.jsx')
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
            { test: /\.css$/, loader: "style!css-loader?sourceMap&modules&localIdentName=[local]___[hash:base64:5]" },
            { test: /\.css\?global$/, loader: "style!css-loader?sourceMap&modules&localIdentName=[local]" },
            { test: /\.json$/, loader: 'json' },
            { test: /\.scss$/, loader: 'style!css?modules&sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded' },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
          { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins: plugins,
    postcss: function() {
        return [autoprefixer({
            browsers: ['last 2 versions']
        })];
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
        port: PORT,
        historyApiFallback: true
    },
    devtool: 'eval'
};
