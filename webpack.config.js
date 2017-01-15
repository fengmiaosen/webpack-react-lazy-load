/**
 * Created by fengmiaosen on 2017/1/15.
 */
module.exports = {
    entry: './main',
    output: {
        path: __dirname + '/dist',
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
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

// 生产环境配置
if (process.env.NODE_ENV === 'production') {

    module.exports.output = Object.assign({}, module.exports.output, {
        filename: '[name].js?[chunkhash:8]',
        publicPath: '/webpack-react-lazy-load/dist/'
    });

    module.exports.devtool = '#source-map';
}