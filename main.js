/**
 * Created by fengmiaosen on 2017/1/15.
 */
import ReactDOM from 'react-dom';
import LazilyLoad, {importLazy} from './lib/LazilyLoad';
import React from 'react';
import Load_jQuery from './js/Load_jQuery';
import Load_G2 from './js/Load_G2';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            load: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            load: !this.state.load,
        });
    }

    render() {
        return (
            <div>
                <p>
                    <a
                        style={{ color: 'blue', cursor: 'pointer' }}
                        onClick={this.handleClick}>点击加载jQuery和G2</a>
                </p>

                <LazilyLoad modules={{
                    LoadedLate: () => require('./lazy/LoadedLate')()
                }}>
                    {({LoadedLate}) => (
                        <div>
                            <LoadedLate />
                        </div>
                    )}
                </LazilyLoad>

                {this.state.load ?
                    <div>
                        <Load_jQuery />
                        <Load_G2 />
                    </div>
                    : null
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('App'));