/** @format */

import React from "react";
import {FaLock, FaUserAlt} from "react-icons/fa";

const LoginForm = ({have_acc, type}) => {
	return (
		<>
			<form
				action='#'
				className={
					have_acc === true
						? "sign-in-form flex flex-col justify-center items-center col-[1/2] row-[1/2] z-[2]  "
						: "sign-up-form flex flex-col justify-center items-center col-[1/2] row-[1/2] z-[1] opacity-0  "
				}>
				<h2 className='title text-4xl text-[#444] mb-3 font-bold'>{type}</h2>
				<div className='input-field max-w-[380px] w-screen h-[55px] bg-[#f0f0f0] my-3 mx-0 rounded-[55px] grid grid-cols-[15%,85%] p-2'>
					<i className='flex justify-center items-center text-[#acacac] text-[20px] m-1'>
						<FaUserAlt />
					</i>
					<input
						className='border-none bg-transparent outline-none leading-[1] font-[600] text-[20px] text-[#333] placeholder:{text-[#aaa] font-[500]}'
						type='number'
						placeholder='123 456-7890'
						required
					/>
				</div>
				<div className='input-field max-w-[380px] w-screen h-[55px] bg-[#f0f0f0] my-3 mx-0 rounded-[55px] grid grid-cols-[15%,85%] p-2'>
					<i className='flex justify-center items-center text-[#acacac] text-[20px] '>
						<FaLock />
					</i>
					<input
						className='border-none bg-transparent outline-none leading-[1] font-[600] text-[20px] text-[#333] placeholder:text-[#aaa] placeholder:font-[500]'
						type='password'
						placeholder='Password'
						required
					/>
				</div>
				<input
					type='submit'
					value={type}
					className='btn solid w-[150px] h-[49px] border-none outline-none rounded-[49px] cursor-pointer bg-[#5995fd] text-white uppercase font-[600] my-3 transition duration-500 ease-linear hover:bg-[#4d84e2]'
				/>
			</form>
		</>
	);
};

export default LoginForm;
