const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function (env) {
    const isDevelopment = env.WEBPACK_SERVE;
    const isProduction = !isDevelopment;

    const src = path.resolve(__dirname, 'src');
    const dist = path.resolve(__dirname, 'dist');

    return {
        mode: isProduction ? 'production' : 'development',
        target: 'web',
        context: src,
        devtool: isDevelopment && 'source-map',
        entry: './index.js',
        output: {
            path: dist,
            filename: 'assets/js/[name].[contenthash].js',
            chunkFilename: 'assets/js/[name].[contenthash].js',
            clean: true
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@api': path.resolve(src, 'api'),
                '@components': path.resolve(src, 'components'),
                '@features': path.resolve(src, 'features'),
                '@pages': path.resolve(src, 'pages'),
                '@scss': path.resolve(src, 'assets', 'scss')
            }
        },
        devServer: {
            open: true,
            port: 5000,
            liveReload: true,
            hot: true,
            compress: true,
            static: {
                directory: dist,
                publicPath: '/'
            }
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? 'production' : 'development'
                        }
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/fonts/[hash][ext][query]',
                    }
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/images/[hash][ext][query]',
                    }
                }
            ]
        },
        optimization: {
            minimize: isProduction,
            minimizer: [
              new TerserPlugin({
                  parallel: true
              }),
                new CssMinimizerPlugin({
                    parallel: true
                })
            ],
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                minSize: 0,
                maxInitialRequests: 20,
                maxAsyncRequests: 20,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    },
                    styles: {
                        name: 'styles',
                        test: /\.s?css$/,
                        chunks: 'all',
                        minChunks: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                filename: 'index.html',
                scriptLoading: 'defer',
                inject: 'head',
                minify: {
                    collapseWhitespace: isProduction,
                    removeComments: isProduction,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                }
            }),
            isProduction &&  new MiniCssExtractPlugin({
                filename: 'assets/css/[name].[contenthash].css',
                chunkFilename: 'assets/css/[name].[contenthash].css'
            })
        ].filter(Boolean)
    };
}
