import React from 'react';
import "./AddAuthorForm.css"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            bookTemp: '',
            books: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }
    handleAddBook(event) {
        event.preventDefault();
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="AddAuthorForm__input col-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" 
                        name="name" value={this.state.name} onChange={this.onFieldChange} />
                </div>
            </div>
            <div className="row">
                <div className="AddAuthorForm__input col-4">
                    <label htmlFor="imageUrl">Image Url</label>
                    <input type="text" className="form-control" 
                        name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}/>
                </div>
            </div>
            <div className="row">
                <div className="AddAuthorForm__input col-4">
                    <label htmlFor="bookTemp">Books</label>
                    {this.state.books.map((book) => <p key={book}>{book}</p>)}
                    <input type="text"
                        name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}/>
                    <input type="submit" className="btn btn-sm btn-secondary" 
                        value="+" onClick={this.handleAddBook}/>
                </div>
            </div>
            <input type="submit" className="btn btn-sm btn-success" label="add" />
        </form>
    }
}

function AddAuthorForm({match, onAddAuthor}) {
    return (
    <div className="AddAuthorForm container-fluid">
        <h1>Add Author</h1>
        <AuthorForm onAddAuthor={onAddAuthor} />
    </div>
    );
  }

function mapDispatchToProps(dispatch, props) {
    return {
        onAddAuthor: (author) => {
            dispatch({type: 'ADD_AUTHOR', author});
            props.history.push('/');
        }
    }
}

  export default withRouter(connect(() => {}, mapDispatchToProps)(AddAuthorForm));