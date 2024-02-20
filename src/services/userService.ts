import { BaseService } from "../core/services/baseService";
import { GetAllUserResponse } from "./../models/responses/user/getAllUserResponse";
import { GetUserResponse } from "./../models/responses/user/getUserResponse";
import { AddUserRequest } from "../models/requests/user/addUserRequest";
import { AddUserResponse } from "../models/responses/user/addUserResponse";
import { UpdateUserRequest } from "./../models/requests/user/updateUserRequest";
import { UpdateUserResponse } from "../models/responses/user/updateUserResponse";
import { DeleteUserResponse } from "./../models/responses/user/deleteUserResponse";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { AxiosResponse } from "axios";

class UserService extends BaseService<
	GetAllUserResponse,
	GetUserResponse,
	AddUserRequest,
	AddUserResponse,
	UpdateUserRequest,
	UpdateUserResponse,
	DeleteUserResponse
> {
	constructor() {
		super();
		this.apiUrl = "Users";
	}
	getByMail(email: string): Promise<AxiosResponse<GetUserResponse, any>> {
		return axiosInstance.get<GetUserResponse>(this.apiUrl + "/GetUserByMail", {
			params: { email: email },
		});
	}
}

export default new UserService();
