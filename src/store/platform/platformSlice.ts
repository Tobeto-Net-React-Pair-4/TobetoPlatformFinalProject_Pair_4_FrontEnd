import { Paginate } from "../../core/models/PaginateResponseModel";
import { GetListAnnouncementResponse } from "../../models/responses/announcement/getListAnnouncementResponse";
import { CourseGetListResponse } from "../../models/responses/course/courseGetListResponse";
import { GetListExperienceResponse } from "../../models/responses/experience/getListExperienceResponse";
import { GetUserResponse } from "./../../models/responses/user/getUserResponse";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const savedUserState = localStorage.getItem("userData");
const savedCoursesState = localStorage.getItem("courses");
const savedAnnouncementsState = localStorage.getItem("announcements");
const savedExperienceState = localStorage.getItem("experiences");
interface PlatformState {
	user: GetUserResponse;
	courses: Paginate<CourseGetListResponse>;
	announcements: Paginate<GetListAnnouncementResponse>;
	experiences: Paginate<GetListExperienceResponse>;
}
const initialState: PlatformState = {
	user: savedUserState ? JSON.parse(savedUserState) : ({} as GetUserResponse),
	courses: savedCoursesState
		? JSON.parse(savedCoursesState)
		: ({} as Paginate<CourseGetListResponse>),
	announcements: savedAnnouncementsState
		? JSON.parse(savedAnnouncementsState)
		: ({} as Paginate<GetListAnnouncementResponse>),
	experiences: savedExperienceState
		? JSON.parse(savedExperienceState)
		: ({} as Paginate<GetListExperienceResponse>),
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
		setCourses(state, action: PayloadAction<Paginate<CourseGetListResponse>>) {
			state.courses = action.payload;
			localStorage.setItem("courses", JSON.stringify(action.payload));
		},
		removeCourses(state) {
			state.courses = {} as Paginate<CourseGetListResponse>;
		},
		setAnnouncements(
			state,
			action: PayloadAction<Paginate<GetListAnnouncementResponse>>
		) {
			state.announcements = action.payload;
			localStorage.setItem("announcements", JSON.stringify(action.payload));
		},
		removeAnnouncements(state) {
			state.announcements = {} as Paginate<GetListAnnouncementResponse>;
		},
		setExperiences(
			state,
			action: PayloadAction<Paginate<GetListExperienceResponse>>
		) {
			state.experiences = action.payload;
			localStorage.setItem("experiences", JSON.stringify(action.payload));
		},
		removeExperiences(state) {
			state.experiences = {} as Paginate<GetListExperienceResponse>;
		},
	},
});

export const {
	setUser,
	removeUser,
	setCourses,
	removeCourses,
	setAnnouncements,
	removeAnnouncements,
} = platformSlice.actions;
export default platformSlice.reducer;
