/**
 * Created by fengmiaosen on 2017/1/15.
 */
module.exports = {
    entry: './main',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath: '/webpack-react-lazy-load/'
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