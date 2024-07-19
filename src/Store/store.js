/** @format */

import {configureStore} from "@reduxjs/toolkit";
import books from "./Slices/bookSlice";
import auth from "./Slices/AuthSlice";
import report from "./Slices/reportSlice";

export const store = configureStore({
	reducer: {
		books,
		auth,
		report,
	},
});
