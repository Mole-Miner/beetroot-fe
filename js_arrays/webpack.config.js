const path = require('node:path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    devtool: 'eval-cheap-module-source-map',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
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
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: 'JS Arrays',
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            inject: 'body',
            scriptLoading: 'module'
        })
    ]
};
