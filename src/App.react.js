import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router'

import Main from './Components/Main.react';
import Tutorial1 from './Components/Tutorial/Tutorial1Intro.react';
import { Tutorial21, Tutorial22 }  from './Components/Tutorial/Tutorial2Min.react';
import { Tutorial31, Tutorial32, Tutorial33 }  from './Components/Tutorial/Tutorial3Styling.react';
import Tutorial4 from './Components/Tutorial/Tutorial4Filters.react';
import TutorialConclusion from './Components/Tutorial/TutorialConclusion.react';

let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/intro" component={Tutorial1}/>
            <Route path="/minimum-map/min" component={Tutorial21}/>
            <Route path="/minimum-map/data" component={Tutorial22}/>
            <Route path="/styling/lines" component={Tutorial31}/>
            <Route path="/styling/order" component={Tutorial32}/>
            <Route path="/styling/labels" component={Tutorial33}/>
            <Route path="/filters" component={Tutorial4}/>
            <Route path="/conclusion" component={TutorialConclusion}/>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
)
