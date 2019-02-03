import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import About from './About';
import AuthorPage from './AuthorPage';
import ManageAuthorPage from './ManageAuthorPage';
import Header from './Header';

const Page404 = ({ location }) => (
    <div>
       <h2>No match found for <code>{location.pathname}</code></h2>
    </div>
 );


ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route path="/" component={Header} />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/About" component={About} />
                <Route path="/Authors" component={AuthorPage} />
                <Route path="/AddAuthor" component={ManageAuthorPage} />
                <Route path="/AddAuthor/:id" component={ManageAuthorPage} />
                <Redirect from="/about-us" to="/About" />
                <Route  component={Page404} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();

