import { BaseService } from "../core/services/baseService";
import { GetAllUserResponse } from "./../models/responses/user/getAllUserResponse";
import { GetUserResponse } from "./../models/responses/user/getUserResponse";
import { AddUserRequest } from "../models/requests/user/addUserRequest";
import { AddUserResponse } from "../models/responses/user/addUserResponse";
import { UpdateUserRequest } from "./../models/requests/user/updateUserRequest";
import { UpdateUserResponse } from "../models/responses/user/updateUserResponse";
import { DeleteUserResponse } from "./../models/responses/user/deleteUserResponse";

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
}
export default new UserService();
