"use strict";

var webpack = require("webpack"),
    path = require("path"),
    dfltPort = 2017,
    ip = require('ip').address(),
    currentTime = new Date().getTime(), //当前时间戳
    HtmlWebpackPlugin = require('html-webpack-plugin'), //入口首页生成插件
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    ZipPlugin = require('zip-webpack-plugin'),//自动压缩打包后的文件
    mode = process.argv[2] ? process.argv[2].replace('--', '') : '',
    publicPath = mode === "dev" ? "/assets/" : "./assets/";


module.exports = {
    entry: mode === "dev" ? [
        'webpack-dev-server/client?http://10.118.206.50:' + dfltPort,
        'webpack/hot/only-dev-server',
        './src/app.js'
    ] : './src/app.js',
    output: {
        path: path.join(__dirname, '/dist/assets'),
        filename: mode === "dev" ? 'app.js' : 'app' + currentTime + '.js',
        publicPath: publicPath
    },
    devServer: {
        port: dfltPort,
        host: ip,
        contentBase: "./src",
        historyApiFallback: true,
        disableHostCheck: true,//解决invalid host header

        /*开发模式代理相应Ajax请求到指定服务器*/
        proxy: {
            '/api/*': {
                target: "http://10.118.232.44:8052/", //测试地址
            }

        },
        publicPath: publicPath,
        noInfo: false
    },
    cache: mode === "dev",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: 'es2015',
                    plugins: "transform-class-properties"
                }
            }, {
                test: /\.css$/,
                loader: //mode === "dev" ?
                'style-loader!css-loader!postcss-loader'
                //:
                //ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
                //mode === "dev"?'style-loader!css-loader!postcss-loader!sass-loader'
                //: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader','sass-loader')
            }, {
                test: /\.html$/,
                loader: 'html',
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=10000&name=images/[name].[ext]'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                loader: "url-loader?name=fonts/[name].[ext]"
            }, {
                test: /\.(mp4|ogg)$/,
                loader: 'file-loader'
            }]
    },
    resolve: {
        alias: {
            'action': 'src/actions',
            'component': 'src/components',
            'container': 'src/containers',
            'reducer': 'src/reducers',
        },
        extensions: ['', '.js', '.jsx']
    },
    postcss: function () {
        return [require('autoprefixer')];
    },
    devtool: mode === "dev" ? "#@source-map" : undefined,
    plugins: mode === "dev" ? [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ] :
        [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            //new ExtractTextPlugin("styles/styles.css"),
            new HtmlWebpackPlugin({
                favicon: 'src/imgs/favicon.ico',
                template: 'src/prod.html',
                filename: '../index.html',
                inject: 'body'
            }),
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false,
                },
                compress: {
                    warnings: false
                },
                /**以下字段，不进行混淆*/
                mangle: true
            }),
            //优化打包代码
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            // new webpack.optimize.AggressiveMergingPlugin(), 合并压缩代码
            new webpack.optimize.CommonsChunkPlugin('common' + currentTime + '.js'),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new ZipPlugin({
                path: path.join(__dirname, './dist'),
                filename: 'dist.zip',
                pathPrefix: 'assets'
            })
        ]
};

