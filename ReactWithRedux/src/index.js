/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CouresPage from './components/course/CoursesPage';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={HomePage} />
                <Route path="courses" component={CouresPage} /> 
                <Route path="course" component={ManageCoursePage} /> 
                <Route path="course/:id" component={ManageCoursePage} /> 
                <Route path="about" component={AboutPage} /> 
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('app')
);