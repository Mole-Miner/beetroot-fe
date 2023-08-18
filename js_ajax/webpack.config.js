const webpack = require('webpack');
const path = require('node:path');
const HtmlPlugin = require('html-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const pageNames = ['promise', 'fetch', 'copywriter'];

module.exports = {
    mode: 'development',
    target: 'web',
    context: src,
    devtool: 'eval-cheap-module-source-map',
    entry: pageNames.reduce((entry, pageName) => ({
        [pageName]: `./app/${pageName}.js`,
        ...entry,
    }), {}),
    output: {
        path: dist,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        clean: true
    },
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        open: false,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
        static: {
            directory: dist,
            publicPath: '/'
        }
    },
    resolve: {
        extensions: ['.js', '.scss'],
        alias: {
            '@js': path.resolve(src, 'app'),
            '@scss': path.resolve(src, 'assets', 'scss'),
        },
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}]
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MinCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js",
        }),
        new MinCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css',
            ignoreOrder: false,
        }),
        ...pageNames.map((pageName) => {
            const pageTitle = pageName.replace(pageName[0], pageName[0].toUpperCase());
            return new HtmlPlugin({
                title: `JS AJAX ${pageTitle}`,
                template: path.resolve(src, 'assets', 'templates', 'template.html'),
                filename: `${pageName}.html`,
                chunks: [pageName],
            });
        }),
    ],
};
