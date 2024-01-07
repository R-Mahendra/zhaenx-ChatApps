/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import Login from "./pages/Login";
import ChatPages from "./pages/ChatPages"
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/Chat"
					element={
						<PrivateRoute>
							<ChatPages />
						</PrivateRoute>
					}
				/>
			</Routes>
		</AuthProvider>
	);
};

export default App;
