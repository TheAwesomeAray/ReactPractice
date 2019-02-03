import React from 'react';
import PropTypes from 'proptypes';
import AuthorApi from './StubAuthorAPI';
import { withRouter } from 'react-router-dom';
import Toastr from 'toastr';
import './toastr.css';
import './bootstrap.min.css';

class ManageAuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: ManageAuthorPage.getInitialState(),
            errors: {}
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onAddAuthor = this.onAddAuthor.bind(this);
    }
    static getInitialState = () => ({
        id: '',
        firstName: '',
        lastName: ''
    })
    onFieldChange(name, value) {
        this.setState(prevState => {
            let author = prevState.author;
            author[name] = value;

            return author;
        });
    }
    authorFormIsValid = () => {
        var formIsValid = true;
        let errors = {}

        if (this.state.author.firstName.length < 3) {
            errors['firstName'] = 'First name must be at least 3 characters';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            errors['lastName'] = 'Last name must be at least 3 characters';
            formIsValid = false;
        }

        this.setState({
            errors: errors
        })

        return formIsValid;
    }
    onAddAuthor() {
        if (!this.authorFormIsValid())
            return;

        AuthorApi.saveAuthor(this.state.author);
        Toastr.success('Author Saved.');
        this.props.history.push('/Authors');
    }
    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm author={this.state.author} 
                            onFieldChange={this.onFieldChange}
                            onAddAuthor={this.onAddAuthor}
                            errors={this.state.errors} />
            </div>
    )}
}

const AuthorForm = (props) => {
    const handleChange = (event) => {
        props.onFieldChange(event.target.name, event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddAuthor();
    }
    console.log(props.errors);
    return (
        <form className="needs-validation container" onSubmit={handleSubmit}>
            <FormInput name="firstName"
                       value={props.author.firstName}
                       label="First Name"
                       onFieldChange={handleChange}
                       error={props.errors.firstName} />
           
            <FormInput name="lastName"
                       value={props.author.lastName}
                       label="Last Name"
                       onFieldChange={handleChange}
                       error={props.errors.lastName} />
            <button type="submit" className="btn btn-sm btn-default">Save</button>
        </form>
    );
}

const FormInput = (props) => {
    var wrapperClass = "form-row";
    var validationClass = "form-control";
    if (props.error && props.error.length > 0) {
        validationClass += " is-invalid"
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text"
                name={props.name}
                className={validationClass}
                placeholder={props.placeholder}
                onChange={props.onFieldChange}
                value={props.value} />
            <div className="invalid-feedback">
                {props.error}
            </div>
        </div>
    );
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
  }


export default withRouter(ManageAuthorPage);