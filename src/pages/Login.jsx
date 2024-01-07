/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import GoogleIcons from "../assets/loginwith-GF/Google_icons.png";
import FBicons from "../assets/loginwith-GF/Facebook_icons.png";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { currentUser, signinWithGoogle } = UserAuth();
	// console.log(currentUser);

	const nav = useNavigate();

	const handleLoginGoogle = async () => {
		try {
			await signinWithGoogle();
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		if (currentUser) {
			nav("/Chat");
		}
	}, [currentUser, nav]);

	return (
		<>
			<section className="login" id="login">
				<div className="container">
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-lg-6">
							<div className="card">
								<h2 className="card-title">Welcome to room chat private</h2>
								<h3 className="card-title">Zhaenx Apps🚀</h3>
								<div className="zx__ButtonLogin" id="zx__ButtonLogin">
									<button type="button" className="btn zx__BtnLogin" id="zx__LoginWithGoogle" onClick={handleLoginGoogle}>
										<img src={GoogleIcons} alt="icons" width={"25"} className="img-fluid" /> Continue with Google
									</button>
									<button type="button" className="btn zx__BtnLogin" id="zx__LoginWithGoogle">
										<img src={FBicons} alt="icons" width={"25"} className="img-fluid" /> Continue with facebook
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
