import React from "react";
import "./Message.css";
import ReactEmoji from 'react-emoji'

const Message = ({ message: { user, text }, name }) => {
	let isSentByCurrentUser = false;
	const trimName = name.trim();

	if (user === trimName) {
		isSentByCurrentUser = true;
	}

	return isSentByCurrentUser ? (
		<div className="messageContainer justifyEnd">
			<p className="sentText pr-10">you</p>
			<div className="messageBox">
				<p className="messageText">{ReactEmoji.emojify(text)}</p>
			</div>
		</div>
	) : (
		<div className="messageContainer justifyStart">
			<div className="messageBox  backgroundSecondary">
				<p className="messageText colorDark">{text}</p>
			</div>
      <p className="sentText pl-10">{user}</p>
		</div>
	);
};

export default Message;
