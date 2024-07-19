/** @format */

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {infoReport} from "./reportSlice";

export const getBooks = createAsyncThunk(
	"book/getBooks",
	async (_, thunkAPI) => {
		const {rejectWithValue} = thunkAPI;
		try {
			const res = await fetch("http://localhost:3000/books");
			const data = await res.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

export const insertBook = createAsyncThunk(
	"book/insertBook",
	async (bookData, thunkAPI) => {
		const {rejectWithValue, getState, dispatch} = thunkAPI;
		try {
			bookData.userName = getState().auth.name;
			const res = await fetch("http://localhost:3000/books", {
				method: "POST",
				body: JSON.stringify(bookData),
				headers: {"Content-type": "application/json; charset=UTF-8"},
			});
			const data = await res.json();
			dispatch(infoReport({name: "insert book", status: "success"}));
			return data;
		} catch (error) {
			dispatch(infoReport({name: "insert book", status: "failed"}));
			return rejectWithValue(error.message);
		}
	},
);

export const deleteBook = createAsyncThunk(
	"book/deleteBook",
	async (item, thunkAPI) => {
		const {rejectWithValue} = thunkAPI;
		try {
			await fetch(`http://localhost:3000/books/${item.id}`, {
				method: "DELETE",
				headers: {"Content-type": "application/json; charset=UTF-8"},
			});
			return item;
		} catch (error) {
			rejectWithValue(error.message);
		}
	},
);

export const getBook = createAsyncThunk(
	"book/getBook",
	async (item, thunkAPI) => {
		const {rejectWithValue} = thunkAPI;
		try {
			await fetch(`http://localhost:3000/books/${item.id}`, {
				method: "GET",
				headers: {"Content-type": "application/json; charset=UTF-8"},
			});
			return item;
		} catch (error) {
			rejectWithValue(error.message);
		}
	},
);

const bookSlice = createSlice({
	name: "book",
	initialState: {
		books: [],
		isLoading: false,
		loadingInfo: false,
		error: null,
		selectedBook: null,
	},
	extraReducers: (builder) => {
		builder
			// get Book
			.addCase(getBooks.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getBooks.fulfilled, (state, action) => {
				state.books = action.payload;
				state.isLoading = false;
			})
			.addCase(getBooks.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			// insert Book
			.addCase(insertBook.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(insertBook.fulfilled, (state, action) => {
				state.books.push(action.payload);
				state.isLoading = false;
			})
			.addCase(insertBook.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			// delete Book
			.addCase(deleteBook.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteBook.fulfilled, (state, action) => {
				state.books = state.books.filter((el) => el.id !== action.payload.id);
				state.isLoading = false;
			})
			.addCase(deleteBook.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			// get Book
			.addCase(getBook.pending, (state, action) => {
				state.loadingInfo = true;
				state.error = null;
			})
			.addCase(getBook.fulfilled, (state, action) => {
				state.selectedBook = state.books.find(
					(el) => el.id === action.payload.id,
				);
				state.loadingInfo = false;
			})
			.addCase(getBook.rejected, (state, action) => {
				state.loadingInfo = false;
				state.error = action.payload;
			});
	},
});

// [getBooks.pending]: (state, action) => {
// 	console.log(action);
// },
// [getBooks.fulfilled]: (state, action) => {
// 	console.log(action);
// },
// [getBooks.rejected]: (state, action) => {
// 	console.log(action);
// },

export default bookSlice.reducer;
