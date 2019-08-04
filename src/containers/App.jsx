import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from '../store';
import NavBar from './NavBar';
import RouteViews from './RouteViews';

const App = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <NavBar></NavBar>
                <RouteViews></RouteViews>
            </Fragment>
        </Router>
    </Provider>
)

// arrow function에서 
// () => () 이거면 뒤 ()자체가 리턴
// () => {} 이거는 이제 {}안에 여러줄 쓸 수 있음
export default App;