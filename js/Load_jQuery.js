/**
 * Created by fengmiaosen on 2017/1/15.
 */
import React from 'react';
import { LazilyLoadFactory } from '../lib/LazilyLoad';

// ES Decorators函数实现高阶组件封装
// 效果等同于
// export default LazilyLoadFactory(Load_jQuery, {
//     $: () => require('jquery')(),
// });
// 参考 http://technologyadvice.github.io/es7-decorators-babel6/
const LazilyLoadDecorator = (Component) => {

    return LazilyLoadFactory(Component, {
        $: () => require('jquery')(),
    });
};

// ES Decorators语法
// 需要依赖babel-plugin-transform-decorators-legacy
// babel-loader配置使用plugins: ["transform-decorators-legacy"]
@LazilyLoadDecorator
export default class Load_jQuery extends React.Component {

    componentDidMount() {
        console.log('Load_jQuery props:', this.props);

    }

    render() {
        return (
            <div ref={(ref) => this.props.$(ref).css('background-color', 'red')}>
                Hello jQuery
            </div>
        );
    }

};
