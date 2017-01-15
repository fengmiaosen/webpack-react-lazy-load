/**
 * Created by fengmiaosen on 2017/1/15.
 */
import React from 'react';
import { LazilyLoadFactory } from '../lib/LazilyLoad';

class Load_jQuery extends React.Component {

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

export default LazilyLoadFactory(Load_jQuery, {
    $: () => require('es6-promise?jQuery!jquery')(),
});