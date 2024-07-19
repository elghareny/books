/** @format */

import {createSlice} from "@reduxjs/toolkit";

const reportSlice = createSlice({
	name: "report",
	initialState: {info: []},
	reducers: {
		infoReport: (state, action) => {
			state.info.push(action.payload);
		},
	},
});
export const {infoReport} = reportSlice.actions;
export default reportSlice.reducer;
