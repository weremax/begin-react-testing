import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

let wrapped;
beforeEach(() => {
     wrapped = shallow(<App />);
});

it('shows a comment box', () => {
     expect(wrapped.find(CommentBox).length).toEqual(1);
});
