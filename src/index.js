import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import firebase from "firebase/app"
import "firebase/auth"

import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

const routing = (
<Router>
    <div>
        <Route path="/" component={App} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
    </div>
</Router>);

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
