import React from 'react';
import NavBar from './NavBar';
import RouteViews from './RouteViews';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => (
    <div>
        <Router>
            <NavBar></NavBar>
            <RouteViews></RouteViews>
        </Router>
    </div>
)

// arrow function에서 
// () => () 이거면 뒤 ()자체가 리턴
// () => {} 이거는 이제 {}안에 여러줄 쓸 수 있음
export default App;