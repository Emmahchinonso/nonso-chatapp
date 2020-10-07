import React from "react";
import "./InfoBar.css";
import { Link } from "react-router-dom";
import closeIcon from "../../Icons/closeIcon.png";
import onlineIcon from "../../Icons/onlineIcon.png";

const InfoBar = ({ room }) => (
	<div className="infoBar">
		<div className="leftInnerContainer">
			<img className="onlineIcon" src={onlineIcon} alt={"room is online"} />
			<h3>{room}</h3>
		</div>
		<div className="rightInnerContainer">
			<Link to="/" className="exit-chat">
				Leave chat
			</Link>
		</div>
	</div>
);

export default InfoBar;
