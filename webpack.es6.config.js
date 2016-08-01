var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {//打包的入口文件 String|Object
        build: "./es6/index.js"
    },
    output: {//配置打包结果 Object
        path: "./es6_build/",//定义输出文件路径
        filename: "[name].js"//指定打包名称
    },
    module: {//定义了对模块的处理逻辑     Object
        loaders: [//定义了一系列的加载器   Array
            {
                test: /\.css$/,//正则，匹配到的文件后缀名
                loaders: ["style","css"],//处理匹配到的文件
                exclude: "/node_modules/"//排除的文件
            },
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                exclude: "/node_modules/",
                include: path.resolve(__dirname,"/es6/")
            }
        ]
    },
    resolve:{
        extensions: ["",".js",".css","jsx"]//自动补全识别后缀
    },
    devServer: {
        hot: true,
        inline: true
    },
    plugins:[
        new htmlWebpackPlugin({
            title: "es6",   //不写filename 默认是生成index.html
            chunks: ["build"]   //index.html引入的是build.js
        })
    ]
};