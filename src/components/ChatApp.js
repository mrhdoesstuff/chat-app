import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import ChatInput from './ChatInput';
import MessageList from './MessageList';


class ChatApp extends Component {
	socket = {};
	constructor(props) {
		super(props);
		this.state = {messages: []};

		this.handleSubmit = this.handleSubmit.bind(this);

		//connect to the server
		this.socket = SocketIOClient('http://localhost:8080', {query: `username=${props.username}`}).connect();

		//listen for messages from the server
		this.socket.on('server: message', message => {
			this.addMessage(message);
		});	
	}

	handleSubmit(message) {
		const messageObject = {
			username: this.props.username,
			message
		};
		console.log(this.props);
		//emit the message to the server
		this.socket.emit('client:message', messageObject);

		messageObject.fromMe = true;
		this.addMessage(messageObject);
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