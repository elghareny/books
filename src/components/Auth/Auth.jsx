/** @format */

import React, {useEffect, useState} from "react";
import "./Auth.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";

const Auth = () => {
	const dispatch = useDispatch();
	useEffect(() => {}, []);
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		experience: "",
		level: "",
		address: "",
		password: "",
	});

	const [username, setUsername] = useState("");
	const [phone, setPhone] = useState("");
	const [experience, setExperience] = useState("");
	const [level, setLevel] = useState("");
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");

	const [errors, setErrors] = useState({});
	const [toggle, setToggle] = useState(false);
	const [visablePass, setVisiblepass] = useState(false);
	const swape = () => {
		return setToggle(!toggle);
	};

	const changePass = () => {
		return setVisiblepass(!visablePass);
	};

	const handelChange = (e) => {
		console.log(formValues);
		const {name, value} = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};
	// const handelName = (e) => {
	// 	setUsername(e.target.value);
	// 	console.log(username);
	// };
	// const handelPhone = (e) => {
	// 	setPhone(e.target.value);
	// };
	// const handelEx = (e) => {
	// 	setExperience(e.target.value);
	// };
	// const handeLevel = (e) => {
	// 	setLevel(e.target.value);
	// };
	// const handelAddress = (e) => {
	// 	setAddress(e.target.value);
	// };
	// const handelPassword = (e) => {
	// 	setPassword(e.target.value);
	// };
	const validate = () => {
		let tempErrors = {};
		if (!formValues.name) tempErrors.name = "Name is required";
		if (!formValues.phone) {
			tempErrors.phone = "Phone is required";
		} else if (formValues.phone.length < 11) {
			tempErrors.phone = "Phone ust be at least 11 characters long";
		}
		if (!formValues.password) {
			tempErrors.password = "Password is required";
		} else if (formValues.password.length < 8) {
			tempErrors.password = "password must be at least 8 characters long";
		}
		return tempErrors;
	};

	const handelSubmit = (e) => {
		e.preventDefault();

		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			console.log(errors);
		} else {
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Your work has been saved",
				showConfirmButton: false,
				timer: 1500,
			});
			console.log(
				"form values",
				formValues.name,
				formValues.phone,
				formValues.password,
			);
		}
	};

	return (
		<div
			className={toggle ? "container right-panel-active" : "container"}
			id='container'>
			<div className='form-container sign-up-container'>
				<form
					action='#'
					onSubmit={handelSubmit}>
					<h1>Create Account</h1>

					<div className='infield'>
						<input
							name='name'
							required
							type='text'
							placeholder='Name'
							value={formValues.name}
							onChange={handelChange}
						/>
						<label></label>
					</div>
					<div className='infield'>
						<input
							maxLength='11'
							required
							type='number'
							placeholder='Phone'
							name='phone'
							value={formValues.phone}
							onChange={handelChange}
						/>
						<label></label>
					</div>
					<div className='infield'>
						<input
							name='experience'
							max='10'
							maxLength='2'
							required
							type='number'
							placeholder='Years of experience...'
							value={formValues.experience}
							onChange={handelChange}
						/>
						<label></label>
					</div>
					<div className='infield'>
						<select
							className='selector'
							placeholder='choose experience Level'
							// value={formValues.level}
							onChange={handelChange}>
							<option value='fresh'>fresh</option>
							<option value='junior'>junior</option>
							<option value='midLevel'>midLevel</option>
							<option value='senior'>senior</option>
						</select>
						<label></label>
					</div>
					<div className='infield'>
						<input
							name='address'
							required
							type='text'
							placeholder='Address'
							value={formValues.address}
							onChange={handelChange}
						/>
						<label></label>
					</div>
					<div className='infield pass'>
						<input
							name='password'
							required
							type={visablePass ? "text" : "password"}
							placeholder='Password'
							value={formValues.password}
							onChange={handelChange}
						/>
						{visablePass ? (
							<AiOutlineEyeInvisible
								className='icon'
								onClick={changePass}
							/>
						) : (
							<AiOutlineEye
								className='icon'
								onClick={changePass}
							/>
						)}
						<label></label>
					</div>

					<button type='submit'>Sign Up</button>
				</form>
			</div>
			<div className='form-container sign-in-container'>
				<form action='#'>
					<h1>Sign in</h1>
					<div className='infield'>
						<input
							required
							type='number'
							placeholder='Phone'
							name='Phone'
						/>
						<label></label>
					</div>
					<div className='infield'>
						<input
							required
							type='password'
							placeholder='Password'
						/>
						<label></label>
					</div>
					<button>Sign In</button>
				</form>
			</div>
			<div
				className='overlay-container'
				id='overlayCon'>
				<div className='overlay'>
					<div className='overlay-panel overlay-left'>
						<h1>Welcome Back!</h1>
						<p>
							To keep connected with us please login with your personal info
						</p>
						<button>Sign In</button>
					</div>
					<div className='overlay-panel overlay-right'>
						<h1>Hello, Friend!</h1>
						<p>Enter your personal details and start journey with us</p>
						<button>Sign Up</button>
					</div>
				</div>
				<button
					onClick={swape}
					id='overlayBtn'></button>
			</div>
		</div>
	);
};

export default Auth;
