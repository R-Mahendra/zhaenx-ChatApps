/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState, createContext, useEffect } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// login with google
	const signinWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};
   // log-out
   const logout = () => signOut(auth)

	// set current user
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = { 
      currentUser, 
      setCurrentUser, 
      signinWithGoogle,
      logout };

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
