import React from 'react';
import PropTypes from 'proptypes';

class ManageAuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: ManageAuthorPage.getInitialState()
        };
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    static getInitialState = () => ({
        firstName: 'test',
        lastName: 'test'
    })
    onFieldChange(name, value) {
        this.setState(prevState => {
            let author = prevState.author;
            author[name] = value;
            console.log(author);

            return author;
        });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm author={this.state.author} onFieldChange={this.onFieldChange} />
            </div>
    )}
}

const AuthorForm = (props) => {
    const handleChange = (event) => {

        props.onFieldChange(event.target.name, event.target.value);
    }
    return (
        <form>
            <FormInput name="firstName"
                       value={props.author.firstName}
                       label="First Name"
                       onFieldChange={handleChange} />
           
            <FormInput name="lastName"
                       value={props.author.lastName}
                       label="Last Name"
                       onFieldChange={handleChange} />
            <button type="submit" className="btn btn-sm btn-default">Save</button>
        </form>
    );
}

const FormInput = (props) => {
    var wrapperClass = "form-group";
    if (props.error && props.error.length > 0) {
        wrapperClass += " has-error";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text"
                name={props.name}
                className="form-control"
                placeholder={props.placeholder}
                onChange={props.onFieldChange}
                value={props.value} />
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


export default ManageAuthorPage;