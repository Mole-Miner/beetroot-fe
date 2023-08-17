const webpack = require('webpack');
const path = require('node:path');
const HtmlPlugin = require('html-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    devtool: 'eval-cheap-module-source-map',
    entry: {
        modal: './scripts/modal.js',
        accordion: './scripts/accordion.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
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
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        }
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@styles': path.resolve(__dirname, 'src', 'styles')
        }
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
                }
            }
        }
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
                test: /\.css$/,
                use: [MinCssExtractPlugin.loader, 'css-loader']
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js"
        }),
        new MinCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css',
            ignoreOrder: false,
        }),
        ...['modal', 'accordion'].map((pageName) => {
            const pageTitle = pageName.replace(pageName[0], pageName[0].toUpperCase());
            return new HtmlPlugin({
                title: `JS JQuery ${pageTitle}`,
                template: path.resolve(__dirname, 'src', 'templates', 'index.html'),
                filename: `${pageName}.html`,
                chunks: [pageName]
            })
        }),
    ]
};
