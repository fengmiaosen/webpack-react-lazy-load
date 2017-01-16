/**
 * Created by fengmiaosen on 2017/1/15.
 */
import React from 'react';
import { LazilyLoadFactory } from '../lib/LazilyLoad';

class Load_G2 extends React.Component {

    componentDidMount() {
        console.log('Load_G2 props:', this.props.g2);

        const G2 = this.props.g2;

        const data = [
            {action: '访问', visitor: 500},
            {action: '浏览', visitor: 400},
            {action: '交互', visitor: 300},
            {action: '下单', visitor: 200},
            {action: '付款', visitor: 100}
        ];
        const chart = new G2.Chart({
            id: 'c1',
            width : 800,
            height : 400
        }); // 创建图表

        chart.source(data); // 载入数据源
        chart.interval().position('action*visitor').color('action'); // 使用图形语法绘制柱状图
        chart.render();
    }

    render() {
        return (
            <div>
                Hello G2
                <div id="c1"></div>
            </div>
        );
    }

};

export default LazilyLoadFactory(Load_G2, {
    // g2: () => require('es6-promise?g2!g2')(),
    g2: () => require('g2')(),
});