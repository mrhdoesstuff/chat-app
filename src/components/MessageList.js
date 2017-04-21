import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
	componentDidUpdate() {
		const objDiv = document.getElementsByClassName('messages');
		objDiv.scrollTop = objDiv.scrollHeight;	
	}

	render() {
		const messages = this.props.messages.map((message, i) => {
			return (
				<Message
					key={i}
					username={message.username}
					message={message.message}
					// if the isFromMessage is true, message from me 
					isFromMessage={message.fromMe} 
				/>
			);
		});

		return (
			<div className="messages">
				{messages}
			</div>
		);
	}
}

export default MessageList;