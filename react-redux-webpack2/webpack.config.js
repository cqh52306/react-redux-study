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

console.log("当前运行环境：", mode === "dev" ? "dev" : 'pro')

module.exports = {
    entry: {
        app: [
            './src/app.js' //webpack2唯一入口文件
        ]
    },
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
        rules: [
            {
                test: /\.js[x]?$/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'stage-2', 'react'] }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: ['url-loader?limit=1000&name=fonts/[md5:hash:base64:10].[ext]']
            }, {
                test: /\.(mp4|ogg)$/,
                use: ['file-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ]
    },
    devtool: mode === "dev" ? "#@source-map" : undefined,
    plugins: mode === "dev" ? [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),//热替换插件
        // new webpack.NoEmitOnErrorsPlugin(),//遇到错误继续
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
            // new webpack.optimize.AggressiveMergingPlugin(), 合并压缩代码
            new webpack.optimize.CommonsChunkPlugin({
                name: "commons",
                filename: "commons.js",
                minChunks: 2,
            }),
            new webpack.HotModuleReplacementPlugin(),
            new ZipPlugin({
                path: path.join(__dirname, './dist'),
                filename: 'dist.zip',
                pathPrefix: 'assets'
            })
        ]
};

