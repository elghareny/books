/** @format */

import React from "react";
import {useSelector} from "react-redux";

const BookInfo = ({loadingInfo}) => {
	const {selectedBook} = useSelector((state) => state.books);
	return (
		<>
			<h2 className='text-3xl font-semibold'>Books Details</h2>
			{!loadingInfo ? (
				selectedBook ? (
					<div className='border-[#dfdfdf] border-[3px] rounded-md mt-2 p-2 text-blue-700'>
						<p className='font-bold my-2'>
							Title: <span className='text-red-700'>{selectedBook.title}</span>
						</p>
						<p className='font-bold my-2'>
							Description:{" "}
							<span className='text-red-700'>{selectedBook.description}</span>
						</p>
						<p className='font-bold my-2'>
							Price: <span className='text-red-700'>{selectedBook.price}</span>
						</p>
					</div>
				) : (
					<div
						className='bg-[#dfdfdf] p-3 text-[20px] font-medium mt-2 rounded-md'
						role='alert'>
						There is no post yet. Please select !
					</div>
				)
			) : (
				<span className='text-2xl font-bold text-red-700 mt-2'>loading...</span>
			)}
		</>
	);
};

export default BookInfo;
