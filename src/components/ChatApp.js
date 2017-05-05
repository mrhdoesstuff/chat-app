import React, { Component } from 'react';
import io from 'socket.io-client';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

let socket = io();

class ChatApp extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };

		this.handleSubmit = this.handleSubmit.bind(this);

		//connect to the server
		// socket = io.connect('http://localhost:8080', {query: `username=${props.username}`});

		//listen for messages from the server
		socket.on('server message', message => {
			this.addMessage(message);

		});	
	}

	handleSubmit(message) {
		const messageObject = {
			username: this.props.username,
			message: message
		};

		//emit the message to the server
		socket.emit('client message', messageObject);
		messageObject.fromMe = true;
		// this.addMessage(messageObject);
	}

	addMessage(message) {
		const messages = this.state.messages;
		messages.push(message);
		this.setState({messages});
	}

	render() {
		return (
			<div className="container">
				<h3>React Chat App</h3>
				<MessageList messages={this.state.messages} />
				<ChatInput onSend={this.handleSubmit} />
			</div>
		);
	}
}

export default ChatApp;