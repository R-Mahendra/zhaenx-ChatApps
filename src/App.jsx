/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ChatRoom from "./pages/Chatroom";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";

import { AuthProvider } from "./context/AuthContext";

const App = () => {
	return (
		<AuthProvider>
			{/* <Navbar /> */}
			{/* <Login /> */}
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/Chat"
					element={
						<PrivateRoute>
							<ChatRoom />
						</PrivateRoute>
					}
				/>
			</Routes>
		</AuthProvider>
	);
};

export default App;
