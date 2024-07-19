/** @format */

// /** @format */

import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {isLoggedIn: false, name: "mohamed said"},
	reducers: {
		LogInOut: (state) => {
			state.isLoggedIn = !state.isLoggedIn;
		},
	},
});

export const {LogInOut} = authSlice.actions;
export default authSlice.reducer;

// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// var raw =
// 	'{\r\n    "phone" : "+201010558259",\r\n    "password" : "123456",\r\n    "displayName" : "Morad Abdelgaber",\r\n    "experienceYears" : 10,\r\n    "address" : "Mit ghamr , Dakahlia , Egypt",\r\n    "level" : "senior" //fresh , junior , midLevel , senior\r\n}';

// var requestOptions = {
// 	method: "POST",
// 	body: raw,
// 	redirect: "follow",
// };

// const fetchAuth = createAsyncThunk("signUp/fetchAuth", async () => {
// 	const response = await fetch(
// 		"https://todo.iraqsapp.com/auth/register",
// 		requestOptions,
// 	);
// 	return response;
// });

// const AuthSlice = createSlice({
// 	name: "signUp",
// 	initialState: {
// 		tokens: [],
// 		status: "idle",
// 		error: null,
// 	},
// 	reducers: {},
// 	extraReducers: (builder) => {
// 		builder.addCase(fetchAuth.pending, (state) => {
// 			state.status = "loading";
// 		});
// 		builder.addCase(fetchAuth.fulfilled, (state, action) => {
// 			state.status = "succeed";
// 			state.items = action.payload;
// 		});
// 		builder.addCase(fetchAuth.rejected, (state, action) => {
// 			state.status = "failed";
// 			state.error = action.error.message;
// 		});
// 	},
// });

// export default AuthSlice.reducer;
