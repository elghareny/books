/** @format */

import React, {useEffect} from "react";
import BooksList from "./BooksList";
import BookInfo from "./BookInfo";
import {useDispatch, useSelector} from "react-redux";
import {getBooks} from "../../Store/Slices/bookSlice";

const BookContainer = () => {
	const {isLoggedIn} = useSelector((state) => state.auth);

	const {isLoading, books, error, loadingInfo} = useSelector(
		(state) => state.books,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBooks());
	}, [dispatch]);

	return (
		<>
			<hr className='my-5' />
			<div className='flex flex-row w-full justify-around gap-4 px-5'>
				<div className='flex flex-col w-full '>
					<BooksList
						isLoading={isLoading}
						books={books}
						error={error}
						isLoggedIn={isLoggedIn}
					/>
				</div>
				<div className='flex flex-col w-full'>
					<BookInfo loadingInfo={loadingInfo} />
				</div>
			</div>
		</>
	);
};

export default BookContainer;
