import React, { Component } from 'react';

class CommentBox extends Component {
    state = { text: '' }

    handleChange = event => {
        this.setState({ text: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ text: '' });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.handleChange} value={this.state.text} />
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentBox;