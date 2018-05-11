import React, {Component} from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory'

import MainRouter from './router/MainRouter'

export const history = createHistory();


class App extends Component {
    render() {
        return (
            <div className={"App"}>
                <MainRouter />
            </div>
        );
    }
}

export default App;
