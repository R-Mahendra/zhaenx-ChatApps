/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
	const { currentUser } = UserAuth();

	// Periksa apakah message.createdAt adalah objek Date yang valid
	const messageTime = message.createdAt && message.createdAt.toDate();

	// Mendapatkan jam dan menit dari waktu pembuatan pesan
	const jam = messageTime ? messageTime.getHours() : 0;
	const menit = messageTime ? messageTime.getMinutes() : 0;

	return (
		<>
			<div className={`d-flex ${message.uid === currentUser.uid ? "justify-content-start" : "justify-content-end"}`} id="Message">
				<div className="img_cont_msg">
					<img src={message.avatar} className="rounded-circle user_img_msg img-fluid" alt="user" />
				</div>
				<div className="msg_cotainer">
					<h6 className="mb-0">
						<p className="nickName">From: @{message.name}</p>
						{message.text}
					</h6>
					<div className="msg_time">{`${jam < 10 ? "0" : ""}${jam}:${menit < 10 ? "0" : ""}${menit}`} </div>
				</div>
			</div>
		</>
	);
};

export default Message;
