import { Paginate } from "../../core/models/PaginateResponseModel";
import { CourseGetListResponse } from "../../models/responses/course/courseGetListResponse";
import { GetUserResponse } from "./../../models/responses/user/getUserResponse";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const savedUserState = localStorage.getItem("userData");

interface PlatformState {
	user: GetUserResponse;
	courses: Paginate<CourseGetListResponse>;
}
const initialState: PlatformState = {
	user: savedUserState ? JSON.parse(savedUserState) : ({} as GetUserResponse),
	courses: {} as Paginate<CourseGetListResponse>,
};

const platformSlice = createSlice({
	name: "platform",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<GetUserResponse>) {
			state.user = action.payload;
			localStorage.setItem("userData", JSON.stringify(action.payload));
		},
		removeUser(state) {
			state.user = {} as GetUserResponse;
		},
		getCourses(state, action: PayloadAction<Paginate<CourseGetListResponse>>) {
			state.courses = action.payload;
			localStorage.setItem("courses", JSON.stringify(action.payload));
		},
		removeCourses(state) {
			state.courses = {} as Paginate<CourseGetListResponse>;
		},
	},
});

export const { setUser, removeUser, getCourses, removeCourses } =
	platformSlice.actions;
export default platformSlice.reducer;
