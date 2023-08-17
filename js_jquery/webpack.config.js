const path = require('node:path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    devtool: 'eval-cheap-module-source-map',
    entry: {
        index: './scripts/index.js',
        modal: './scripts/modal.js',
        accordion: './scripts/accordion.js',
        slider: './scripts/slider.js',
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
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        }
    },
    resolve: {
        extensions: ['.js']
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
            }
        ]
    },
    plugins: [
        ...['index', 'modal', 'accordion', 'slider'].map((pageName) => {
            const pageTitle = pageName.replace(pageName[0], pageName[0].toUpperCase());
            return new HtmlPlugin({
                title: `JS JQuery ${pageTitle}`,
                template: path.resolve(__dirname, 'src', 'templates', 'index.html'),
                filename: `${pageName}.html`,
                inject: 'body',
                scriptLoading: 'module',
                chunks: [pageName]
            })
        })
    ]
};
