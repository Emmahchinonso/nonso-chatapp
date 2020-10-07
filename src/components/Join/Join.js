import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Br-Chat</h1>
				<div>
					<input
						value={name}
						placeholder="Your Name"
						className="joinInput"
						type="text"
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div>
					<input
						value={room}
						placeholder="Name of room"
						className="joinInput mt-20"
						type="text"
						onChange={(event) => setRoom(event.target.value)}
					/>
				</div>
				<Link
					to={`/chat?name=${name}&room=${room}`}
					onClick={(event) => (!name || !room ? event.preventDefault() : null)}
				>
					<button className="button mt-20" type="submit">
						join room
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Join;
