import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './About';
import AuthorPage from './AuthorPage'
import Header from './Header';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route path="/" component={Header} />
            <Route exact path="/" component={App} />
            <Route path="/About" component={About} />
            <Route path="/Authors" component={AuthorPage} />
        </React.Fragment>
    </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();
