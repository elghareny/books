/** @format */

import React from "react";

const ErrorAlert = ({error}) => {
	return (
		<div className=' p-2 flex items-center justify-start text-2xl text-red-500 w-3/4 h-1/2 bg-red-200 border-red-500 rounded-md border-4'>
			<h2>{error}</h2>
		</div>
	);
};

export default ErrorAlert;
