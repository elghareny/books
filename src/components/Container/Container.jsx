/** @format */

import React from "react";

const Container = ({children}) => {
	return (
		<div className='m-auto max-w-[1100px] w-full flex flex-col justify-center items-center'>
			{children}
		</div>
	);
};

export default Container;
