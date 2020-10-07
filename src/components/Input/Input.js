import React from "react";
import "./Input.css";

const Input = ({ message, sendMessage, setMessage }) => (
	<form className="form" onSubmit={(event) => sendMessage(event)}>
		<input
			className="input"
			type="text"
			placeholder="Your message here"
			value={message}
			onChange={(event) => setMessage(event.target.value)}
			onKeyPress={(event) =>
				event.key === "Enter" ? sendMessage(event) : null
			}
		/>
		<button className="sendButton" type="submit">Send</button>
	</form>
);

export default Input;

