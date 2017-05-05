import React, { Component } from 'react';

class Message extends Component {
	
	render() {
		const fromMe = this.props.fromMe ? 'from-me' : '';

		return (
			<div className={`message-container ${fromMe}`}>
				<div className={`username ${fromMe}`}>
					{this.props.username}
				</div>
				<div className={`message-body ${fromMe}`}>
					{this.props.message}
				</div>
			</div>
		);
	}
}

export default Message;