/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
	const arrbulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	// Dapatkan objek waktu saat ini
	const now = new Date();
	// Dapatkan jam dan menit
	const jam = now.getHours();
	const menit = now.getMinutes();
	const { currentUser } = UserAuth();

	return (
		<>
			<div className={`d-flex mb-5 ${message.uid === currentUser.uid ? "justify-content-start" : "justify-content-end"}`} id="Message">
				<div className="img_cont_msg">
					<img src={message.avatar} className="rounded-circle user_img_msg img-fluid" alt="user" />
				</div>
				<div className="msg_cotainer">
					<h5 className="mb-0">
						<p>From: @{message.name}</p>
						{message.text}
					</h5>
					<div className="msg_time">{`${jam < 10 ? "0" : ""}${jam}:${menit < 10 ? "0" : ""}${menit}`} </div>
				</div>
			</div>
		</>
	);
};

export default Message;
