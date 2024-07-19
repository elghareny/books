/** @format */

import React, {useState} from "react";
import Input from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {insertBook} from "../../Store/Slices/bookSlice";
import Button from "../Button/Button";

const AddForm = () => {
	const {isLoggedIn} = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [data, setData] = useState({
		title: "",
		price: "",
		description: "",
	});
	const [errors, setErrors] = useState({});

	const handelData = (e) => {
		const {name, value} = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const validate = () => {
		const newErrors = {};
		if (!data.title) {
			newErrors.title = "Title is required";
		}
		if (!data.price) {
			newErrors.price = "Price is required";
		}
		if (!data.description) {
			newErrors.description = "Description is required";
		}
		return newErrors;
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (
			!validationErrors.title &&
			!validationErrors.price &&
			!validationErrors.description
		) {
			dispatch(insertBook(data));
			setData({
				title: "",
				price: "",
				description: "",
			});
			setErrors({title: "", price: "", description: ""});
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<div className='w-1/2 mt-2'>
			<h2 className='text-3xl font-semibold'>Insert Book</h2>
			<form
				onSubmit={handelSubmit}
				action='#'
				className='w-full'>
				<Input
					text='Title'
					name='title'
					type='text'
					handelData={handelData}
					value={data.title}
					error={errors.title}
				/>
				<Input
					text='Price'
					name='price'
					type='number'
					handelData={handelData}
					value={data.price}
					error={errors.price}
				/>
				<Input
					text='Description'
					name='description'
					type='text'
					handelData={handelData}
					value={data.description}
					error={errors.description}
				/>
				<Button
					name='Submit'
					type='submit'
					forDelete={false}
					isLoggedIn={isLoggedIn}
				/>
			</form>
		</div>
	);
};

export default AddForm;
