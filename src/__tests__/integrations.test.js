import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetch #1'}, { name: 'Fetch #2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    // render entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // find fetchComments button and click it
    wrapped.find('.fetch-comments').simulate('click');

    // pause to wait for reply
    /*setTimeout(() => {
        // expefct to find a list of comments.
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    }, 100);*/

    moxios.wait(() => {
        // expefct to find a list of comments.
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
    
});
