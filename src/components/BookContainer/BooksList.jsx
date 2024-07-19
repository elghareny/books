/** @format */

import React from "react";
import ErrorAlert from "../Error/ErrorAlert";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {deleteBook, getBook} from "../../Store/Slices/bookSlice";

const BooksList = ({isLoading, books, error, isLoggedIn}) => {
	const dispatch = useDispatch();
	const booksList =
		books.length > 0
			? books.map((item) => {
					return (
						<li
							className='flex justify-between items-center p-3 border-b-[#dfdfdf] border-[1px]'
							key={item.id}>
							<div className='text-[20px]'>{item.title}</div>
							<div
								className='btn-group flex flex-row gap-1'
								role='group'>
								<Button
									name='Read'
									type='button'
									isLoggedIn={isLoggedIn}
									handelClick={() => {
										dispatch(getBook(item))
											.unwrap()
											.then((result) => console.log(result))
											.catch((e) => console.log(e));
									}}
								/>
								<Button
									name='Delete'
									type='button'
									forDelete={true}
									isLoggedIn={isLoggedIn}
									handelClick={() => {
										dispatch(deleteBook(item))
											.unwrap()
											.then((result) => console.log(result))
											.catch((e) => console.log(e));
									}}
								/>
							</div>
						</li>
					);
			  })
			: "There is no books";

	return (
		<div>
			<h2 className='text-3xl font-semibold'>Books List</h2>
			{isLoading ? (
				"loading..."
			) : error ? (
				<ErrorAlert error={error} />
			) : (
				<ul className='border-[#dfdfdf] border-[1px] rounded-md mt-2'>
					{booksList}
				</ul>
			)}
		</div>
	);
};

export default BooksList;
