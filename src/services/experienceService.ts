import { AxiosResponse } from "axios";
import { Paginate } from "../core/models/PaginateResponseModel";
import { BaseService } from "../core/services/baseService";
import { AddExperienceRequest } from "../models/requests/experience/addExperienceRequest";
import { UpdateExperienceRequest } from "../models/requests/experience/updateExperienceRequest";
import { AddExperienceResponse } from "../models/responses/experience/addExperienceResponse";
import { DeleteExperienceResponse } from "../models/responses/experience/deleteExperienceResponse";
import { GetListExperienceResponse } from "../models/responses/experience/getListExperienceResponse";
import { UpdateExperienceResponse } from "../models/responses/experience/updateExperienceResponse";
import axiosInstance from "../core/interceptors/axiosInceptor";

class ExperienceService extends BaseService<
	Paginate<GetListExperienceResponse>,
	null,
	AddExperienceRequest,
	AddExperienceResponse,
	UpdateExperienceRequest,
	UpdateExperienceResponse,
	DeleteExperienceResponse
> {
	constructor() {
		super();
		this.apiUrl = "Experience";
	}
	getListByUserId(
		userId: string
	): Promise<AxiosResponse<Paginate<GetListExperienceResponse>, any>> {
		return axiosInstance.get<Paginate<GetListExperienceResponse>>(
			this.apiUrl + "/GetListByUserId",
			{
				params: { userId: userId },
			}
		);
	}
}

export default new ExperienceService();
