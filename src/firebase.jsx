/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
	apiKey: "AIzaSyAMvQd9o_X5IwxdKOFAKOpnaVp651X7U7E",
	authDomain: "zhaenxchat.firebaseapp.com",
	projectId: "zhaenxchat",
	storageBucket: "zhaenxchat.appspot.com",
	messagingSenderId: "602335912426",
	appId: "1:602335912426:web:b1306b275ad611a6d81293",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
