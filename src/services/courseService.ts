import { CourseGetResponse } from "./../models/responses/course/courseGetResponse";
import { BaseService } from "../core/services/baseService";
import { CourseGetListResponse } from "../models/responses/course/courseGetListResponse";
import { CourseAddRequest } from "../models/requests/course/courseAddRequest";
import { CourseAddResponse } from "../models/responses/course/courseAddResponse";
import { CourseUpdateRequest } from "../models/requests/course/courseUpdateRequest";
import { CourseDeleteResponse } from "../models/responses/course/courseDeleteResponse";
import { CourseUpdateResponse } from "../models/responses/course/courseUpdateResponse";
import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { Paginate } from "../core/models/PaginateResponseModel";

class CourseService extends BaseService<
	Paginate<CourseGetListResponse>,
	CourseGetResponse,
	CourseAddRequest,
	CourseAddResponse,
	CourseUpdateRequest,
	CourseUpdateResponse,
	CourseDeleteResponse
> {
	constructor() {
		super();
		this.apiUrl = "Courses";
	}
	getListByUserId(
		userId: string
	): Promise<AxiosResponse<Paginate<CourseGetListResponse>, any>> {
		return axiosInstance.get<Paginate<CourseGetListResponse>>(
			this.apiUrl + "/GetListByUserId",
			{
				params: { userId: userId },
			}
		);
	}
}

export default new CourseService();
