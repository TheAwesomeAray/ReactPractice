import React, { Component } from 'react';
import './bootstrap.min.css';

class About extends Component {
    willTransitionTo = (transition, params, query, callback) => {
            alert();
    }
    render() {
      return (
        <div className="jumbotron">
          <h1>About</h1>
        </div>
      );
    }
  };
  
  export default About;
  