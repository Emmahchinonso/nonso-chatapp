import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import UsersOnline from "../UsersOnline/UsersOnline";

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [usersInRoom, setUsersInRoom] = useState([]);
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const ENDPOINT = "https://nonso-chatapp.herokuapp.com/";

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io(ENDPOINT);
		setName(name.toLowerCase());
		setRoom(room.toLowerCase());

		socket.on("connect", () => {
      
      console.log("user connected")
    });

    socket.emit("join", { name, room });

		return () => {
      console.log('clean up ');
      socket.close();
		};
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on("message", (message) => {
			setMessages(messages.concat(message));
		});
  }, [messages]);
  
  useEffect(() =>{
    socket.on('roomData', ({_, users}) => {
      setUsersInRoom(users);
    })
  }, [usersInRoom])

	const sendMessage = (event) => {
		event.preventDefault();
		if (message) {
			socket.emit("sendMessage", message, () => {
				setMessage("");
			});
		}
	};


	return (
		<div className="outerContainer">
			<div className="container">
				<InfoBar room={room} />
        <UsersOnline users={usersInRoom}/>
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					sendMessage={sendMessage}
					setMessage={setMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
