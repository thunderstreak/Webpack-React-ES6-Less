var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var APP_PATH = path.resolve(__dirname, 'app');

/*导入webpackPlugin配置项*/
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var deps = [
    'react/dist/react.min.js',
    'react-router/dist/react-router.min.js',
    'react-dom/dist/react-dom.min.js'
];

var host='localhost';
var listen = 8080;//监听端口

var config = {
	//入口
    entry:{
        app:path.resolve(__dirname,'app/main.js'),
        vendors: ['react','react-dom','react-router']
    },
	//输出
	output:{
		path:path.resolve(__dirname,'./dist'),
        // filename:'js/[name].[hash:8].js'
        filename:'js/build.js'
	},
    //禁用和扩展
    resolve: {
        //当 "react" 在代码中被引入时会使用压缩后的 React JS 文件
        // alias: {
        //   'react': pathToReact
        // },
        alias:{},
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.jsx']
    },
	//预处理加载器
	module:{
        noParse: [],//阻止webpack尝试解析压缩后的文件
		loaders:[
            // 使用暴露全局加载器来暴露压缩版的 React JS，比如 react-router 需要这个。
            {
                test: path.resolve(node_modules, deps[0]),
                loader: "expose?React"
            },
			//js
            {
				test: /\.js|jsx$/, // 用正则来匹配文件路径，匹配 js 或者 jsx
				exclude: /node_modules/,
				loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写

                //备注：es2015用于支持ES6语法，react用于解决render()报错的问题
				/*query:{
					presets:['es2015','react']
				}*/
			},
            //css
            {
                test: /\.css$/, // 只处理.css文件
                loader: 'style!css'
            },
            //less
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            //图片
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=8192'
            },
            //字体
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            }
		]
	},
	//插件
	plugins:[
        //js压缩
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            output: {
              comments: false,
            },
            compress:{
                warnings: false//压缩编译错误警告
            },
        }),
        // new webpack.HotModuleReplacementPlugin(),
        //chunks 最小块的大小限制
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
        //chunks 块最大计数限制
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
        //去除重复
        new webpack.optimize.DedupePlugin(),
        //提取公共模块
        new webpack.optimize.CommonsChunkPlugin(
            {
                names: ['vendors'], //entry页面入口
                filename: 'js/vendors.js',//合并输出
                minChunks:Infinity//提取所有entry共同依赖的模块
            }
        ),
        //设置页面模板
		new HtmlWebpackPlugin({
			title: 'SPA应用',//标题名称
			// favicon:'images/favicon.ico', //favicon路径
			hash: true, //开启hash值验证
			filename: 'index.html', //输出入口文件
			template: path.resolve('app/template', 'index.html'), //模板文件路径
			chunks: ['app', 'vendors'],//需要注入的文件块
			inject: true, //注入资源到template中(true|'head'|'body'|false)
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: true //删除空白符与换行符
			}
		}),
        //运行时自启动浏览器
        new OpenBrowserPlugin({url: 'http://'+host+':'+listen})
	],
	// devtool: 'eval-source-map',//开启源代码
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
}



// 通过在第一部分路径的依赖和解压
// 就是你像引用 node 模块一样引入到你的代码中
// 然后使用完整路径指向当前文件，然后确认 Webpack 不会尝试去解析它

deps.forEach(function (dep) {
    var depPath = path.resolve(node_modules, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});

module.exports = config;
