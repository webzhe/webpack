var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {//打包的入口文件 String|Object
        build: "./app/index.js",    //键：打包后生成的文件名  值:需要打包的文件
        abc: "./app/abc.js"
    },
    output: {//配置打包结果 Object
        path: "./build/",//定义输出文件路径
        filename: "[name].js"//指定打包名称
    },
    module: {//定义了对模块的处理逻辑     Object
        loaders: [//定义了一系列的加载器   Array
            {
                test: /.css$/,//正则，匹配到的文件后缀名
                loaders: ["style","css"],//处理匹配到的文件
                exclude: "/node_modules/"//排除的文件
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
            title: "webpack打包练习",   //不写filename 默认是生成index.html
            chunks: ["build"]   //index.html引入的是build.js
        }),
        new htmlWebpackPlugin({
            title: "abc",   //指html文件里面的title
            filename: "class.html",//生成html的文件名
            chunks: ["abc"]  //class.html引入的是abc.js
        })
    ]
};