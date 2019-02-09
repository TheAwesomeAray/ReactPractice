import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data for use in a dropdown', () => {
            const authors = [
                { id: 'cory-house', firstName: 'Cory', lastName: 'House' },
                { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen' }
            ];

            const expected = [
                { text: 'Cory House', value: 'cory-house' },
                { text: 'Scott Allen', value: 'scott-allen' }
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});