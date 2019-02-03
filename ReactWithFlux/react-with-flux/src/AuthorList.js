import React from 'react';
import PropTypes from 'proptypes';

const AuthorList = (props) => {

return (
    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {props.authors.map((author) => <AuthorRow key={author.id} author={author} />)}
        </tbody>
    </table>
    );
};

AuthorList.propTypes = {
    authors: PropTypes.arrayOf(PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })).isRequired
  }

  

const AuthorRow = (props) => {
    return (
        <tr>
            <td>
                <a href={"/Author/" + props.author.id}>
                    {props.author.id}
                </a>
            </td>
            <td>
                {props.author.firstName} {props.author.lastName} 
            </td>
        </tr>
    );
};

export default AuthorList;