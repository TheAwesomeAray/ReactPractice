import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            authors: this.props.authors,
            errors: {}
        };
    }
    render() {
        return (
            <CourseForm 
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={this.state.authors}
                onSave={() => {}}
                onChange={() => {}}
                loading={false}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    let initialCourse = {id: '', watchHref: '', title: '', length: '', category: ''};
    const authorsFormattedForDropdown = state.authors.map(author => {
       return {
           value: author.id,
           text: author.firstName + ' ' + author.lastName
       };
    });

    return {
        course: initialCourse,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);