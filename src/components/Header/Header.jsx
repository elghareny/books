/** @format */

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {LogInOut} from "../../Store/Slices/AuthSlice";

const Header = () => {
	const {isLoggedIn} = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	return (
		<div className='flex flex-row justify-between items-center px-[20px] py-[10px] bg-[#232323] text-[#fff] sticky top-0 z-50'>
			<h1 className='text-2xl'>My Books</h1>
			<button
				className='text-[20px] text-blue-500 border-2 border-blue-500 px-3 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-500'
				onClick={() => dispatch(LogInOut())}>
				{isLoggedIn ? "Log Out" : " Log In"}
			</button>
		</div>
	);
};

export default Header;
