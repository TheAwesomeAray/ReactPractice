import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Sum(props) {
    return <h1>
        {props.a} + {props.b} = {props.a + props.b}
    </h1>;
}
Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
}

export default Sum;