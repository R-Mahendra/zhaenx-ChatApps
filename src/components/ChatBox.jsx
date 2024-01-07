/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
const ChatBox = () => {
	const [messages, setMessages] = useState([]);
	const messageRef = useRef();
	const ScrollBottom = () => {
		messageRef.current.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(ScrollBottom, [messages]);

	useEffect(() => {
		const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const messages = [];
			querySnapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id });
				console.log(messages);
			});
			setMessages(messages);
		});

		return () => unsubscribe;
	}, []);

	return (
		<>
			<div className="col-lg-12">
				{messages.map((message) => (
					<Message key={message.id} message={message} />
				))}
			</div>
			<div ref={messageRef}></div>
		</>
	);
};

export default ChatBox;
