import React from 'react';
import AuthorAPI from './StubAuthorAPI';
import AuthorList from './AuthorList';
import { Link } from 'react-router-dom';

class AuthorPage extends React.Component {
    function ({ match }) {
        console.log(match);
    }
    constructor(props) {
        super(props);
        this.state = AuthorPage.initialState();
    }
    static initialState = () => ({
        authors: []
    });
    componentDidMount = () => {
        this.setState({
            authors: AuthorAPI.getAllAuthors()
        });
    }
    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="AddAuthor" className="btn btn-sm btn-primary">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        )};
};


export default AuthorPage;