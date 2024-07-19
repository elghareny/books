/** @format */

import React from "react";

const Input = ({name, type, text, handelData, value, error}) => {
	return (
		<div className='flex flex-col my-2'>
			<label
				htmlFor={name}
				className='text-[20px]'>
				{text}
			</label>
			<input
				className='w-full border-[#dfdfdf] border-[1px] py-1 px-2 text-[18px] rounded-md outline-[#dfdfdf] outline-[1px] '
				id={name}
				name={name}
				type={type}
				onChange={handelData}
				value={value}
			/>
			{error && (
				<span
					htmlFor={name}
					className='text-[16px] p-1 text-red-500 transition-all duration-500'>
					{error}
				</span>
			)}
		</div>
	);
};

export default Input;
