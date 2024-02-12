import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { loadingReducer } from "./loading/loadingSlice";
import platformReducer from "./platform/platformSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		loading: loadingReducer,
		platform: platformReducer,
	},
});

export default store;
