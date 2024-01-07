/* eslint-disable no-unused-vars */
import React from "react";
import SendMessage from "../components/SendMessage";
import ChatBox from "../components/ChatBox";

import { UserAuth } from "../context/AuthContext";

const ChatRoom = () => {
	const { currentUser, logout } = UserAuth();

	const HandleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<section className="chatroom" id="chatroom">
			<div className="container">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-lg-10">
						{currentUser ? (
							<button className="btn btn-danger mt-4" onClick={HandleLogout} id="zx__BtnLogout">
								Keluar Room
							</button>
						) : null}
						<div className="card">
							<ChatBox />
							<SendMessage />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ChatRoom;
