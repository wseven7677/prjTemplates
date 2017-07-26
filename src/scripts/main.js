import '../styles/base.less';


/*-----------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import OneBlock from './sub-scripts/OneBlock.jsx';

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={OneBlock} />
            <Route path="/sub" component={OneBlock} />
        </Router>
    ),
    document.getElementById("outter")
);