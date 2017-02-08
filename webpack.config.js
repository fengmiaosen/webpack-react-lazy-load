/**
 * Created by fengmiaosen on 2017/1/15.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'main.js'),
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015','stage-1', 'react'],
                    plugins: ["transform-decorators-legacy"]
                }
            },
            {
                // 匹配 /lazy/*.js 或者类似 /lazy/components/*.js 两种目录下的js文件
                test: /lazy\/([^\/]+\/?[^\/]+).js$/,
                include: path.resolve(__dirname, 'lazy'),
                loaders: ['es6-promise','babel?presets[]=es2015&presets[]=react']
            },
            {
                test: /g2\/([^\/]+\/?[^\/]+).js$/,
                loaders: ['es6-promise']
            },
            {
                test: /jquery\/dist\/([^\/]+\/?[^\/]+).js$/,
                loaders: ['es6-promise']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.template.html'
        })
    ],
    // devServer: {
    //     port: 9000,
    //     historyApiFallback: true,
    //     contentBase: './dist',
    //     noInfo: true
    // },
    performance: {
        hints: false
    },
    devtool: '#cheap-module-eval-source-map'
}

// 生产环境配置
if (process.env.NODE_ENV === 'production') {

    module.exports.output = Object.assign({}, module.exports.output, {
        filename: '[name].js?[chunkhash:8]',
        publicPath: '/webpack-react-lazy-load/dist/'
    });

    module.exports.devtool = '#source-map';
}