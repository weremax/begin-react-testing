import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;


describe('textarea stuff', () => {
    beforeEach(()=> {
        wrapped = mount(<Root><CommentBox /></Root>);
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