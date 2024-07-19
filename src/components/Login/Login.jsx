/** @format */

import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";
import logo from "../../assets/img/log.svg";
import reg from "../../assets/img/register.svg";
import Panel from "./Panel";

const Login = () => {
	return (
		<div className='log relative w-screen min-h-dvh bg-white overflow-hidden before:absolute'>
			<div className='forms-container absolute w-screen h-screen top-0 left-0'>
				<div className='signin_signup absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-[1fr] z-[8]'>
					<LoginForm
						type='Login'
						have_acc={true}
					/>
					<LoginForm
						type='SignUp'
						have_acc={false}
					/>
				</div>
			</div>
			<div className='panels-container absolute w-screen h-screen top-0 left-0 grid grid-cols-[repeat(2,1fr)]'>
				<Panel
					image={logo}
					type='Sign up'
					have_acc={true}
				/>
				<Panel
					image={reg}
					type='Log in'
					have_acc={false}
				/>
			</div>
		</div>
	);
};

export default Login;
