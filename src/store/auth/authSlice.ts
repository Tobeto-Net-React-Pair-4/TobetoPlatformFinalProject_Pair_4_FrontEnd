import { createSlice } from "@reduxjs/toolkit";
import tokenService from "../../core/services/tokenService";

interface AuthState {
	isAuthenticated: boolean;
}

const initialState: AuthState = {
	isAuthenticated: tokenService.hasToken(),
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state) => {
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.isAuthenticated = false;
		},
	},
});

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
