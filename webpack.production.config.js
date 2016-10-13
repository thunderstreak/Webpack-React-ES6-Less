var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var node_modules_dir = path.resolve(__dirname, 'node_modules');


var config = {
    entry: {
        app:path.resolve(__dirname, 'app/main.js'),
        // 当 React 作为一个 node 模块安装的时候，
        // 我们可以直接指向它，就比如 require('react')
        vendors: ['react','react-dom','react-router']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name].[hash:8].js'
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                // 这里再也不需通过任何第三方来加载
                exclude: [node_modules_dir],
                loader: 'babel',
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            output: {
              comments: false,
            },
            compress:{
                warnings: false
            },
            except: ['$','exports','require']    //排除关键字
        }),
        new HtmlWebpackPlugin({
            title: 'SPA应用',//标题名称
            // favicon:'images/favicon.ico', //favicon路径
            hash: true, //开启hash值验证
            filename: 'index.html', //输出入口文件
            template: path.resolve('app/template', 'index.html'), //模板文件路径
            chunks: ['app','vendors'],//需要注入的文件块
            inject: true, //注入资源到template中(true|'head'|'body'|false)
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js')
    ]
};

module.exports = config;