import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CouresPage from './components/course/CoursesPage';

render (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={HomePage} />
            <Route path="courses" component={CouresPage} /> 
            <Route path="about" component={AboutPage} /> 
        </Route>
        
        
        </Router>, 
    document.getElementById('app')
);