import React, { Component } from 'react';

class ChatInput extends Component {
	constructor(props) {
		super(props);
		this.state = {chatInput: ''};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.textChangeHandler = this.textChangeHandler.bind(this); 	
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSend(this.state.chatInput);
		this.setState({chatInput: ''});
	}

	textChangeHandler(e) {
		this.setState({chatInput: e.target.value});
	}

	render() {
		return (
				<form className="chat-input" onSubmit={this.handleSubmit}>
					<input
						type="text" 
						onChange={this.textChangeHandler}
						value={this.state.chatInput}
						placeholder="Write a message..."
						required
					/>
					<button onChange={this.textChangeHandler}>Send</button>
				</form>
		);
	}
}

export default ChatInput;