/** @format */

import React from "react";
const Button = ({type, name, forDelete = false, isLoggedIn, handelClick}) => {
	const del = isLoggedIn
		? "px-3 py-1 bg-red-500 rounded-md text-white max-w-[80px] w-full  hover:bg-red-700 transition-all duration-500"
		: "px-3 py-1 bg-red-500 rounded-md text-white max-w-[80px] w-full opacity-70 cursor-no-drop";
	const notDel = isLoggedIn
		? "px-3 py-1 bg-blue-500 rounded-md text-white max-w-[80px] w-full hover:bg-blue-700 transition-all duration-500"
		: "px-3 py-1 bg-blue-500 rounded-md text-white max-w-[80px] w-full opacity-70 cursor-no-drop";
	return (
		<button
			type={type}
			className={forDelete ? del : notDel}
			disabled={!isLoggedIn}
			onClick={handelClick}>
			{name}
		</button>
	);
};

export default Button;
