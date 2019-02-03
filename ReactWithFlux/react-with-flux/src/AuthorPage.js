import React from 'react';
import AuthorAPI from './StubAuthorAPI';
import AuthorList from './AuthorList';

class AuthorPage extends React.Component {
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
                   <AuthorList authors={this.state.authors} />
            </div>
        )};
};


export default AuthorPage;