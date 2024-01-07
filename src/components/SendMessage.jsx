/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
const SendMessage = () => {
	const [value, setValue] = useState("");
	const { currentUser } = UserAuth();
	const HandleSendMessage = async (e) => {
		e.preventDefault();
		if (value.trim() === "") {
			alert("Ngga boleh pesan kosong anjir!");
			return;
		}
		try {
			const { uid, displayName, photoURL } = currentUser;
			await addDoc(collection(db, "messages"), {
				text: value,
				name: displayName,
				avatar: photoURL,
				createdAt: serverTimestamp(),
				uid,
			});
		} catch (error) {
			console.log(error.message);
		}
		console.log(value);
		setValue("");
	};

	return (
		<>
			<div className="row d-flex justify-content-center align-items-center" id="SendMessage">
				<div className="col-lg-7">
					<form className="d-flex" onSubmit={HandleSendMessage}>
						<input className="form-control form-control-lg" type="text" placeholder="Tulis Pesan.!" aria-label=".form-control-lg" value={value} onChange={(e) => setValue(e.target.value)} />
						<button type="submit" className="btn btn-primary">
							Kirim
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default SendMessage;
