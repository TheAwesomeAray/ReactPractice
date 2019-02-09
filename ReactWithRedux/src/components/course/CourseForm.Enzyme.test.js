import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';


function setUp(saving) {
    let props = {
        course: {}, saving: saving, errors: {}, 
        onSave: () => {},
        onChange: () => {}
    };
    
    return shallow(<CourseForm {...props} />)
}

describe('CourseForm via enzyme', () => {
    it('renders form and h1', () => {
        const wrapper = setUp(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('Save button is labeled "Save" when not saving', () => {
        const wrapper = setUp(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('Save button is labeled "Saving..." when saving', () => {
        const wrapper = setUp(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});