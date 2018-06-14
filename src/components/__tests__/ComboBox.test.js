import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

let wrapped;
describe('textarea stuff', () => {

    beforeEach(()=> {
        wrapped = mount(<App />);
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
                });
            wrapped.update();
    });

    it('texture can be updated', () => { //using mount
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('submit clears text', () => { //using mount
        wrapped.find('textarea').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

    afterEach(() => {
        wrapped.unmount();
    })
});