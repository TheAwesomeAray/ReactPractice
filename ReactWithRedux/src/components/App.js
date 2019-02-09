import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (this.props.loading != nextProps.loading) {
            this.setState({loading: Object.assign({}, nextProps.loading)});
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading}  />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}


export default connect(mapStateToProps)(App);