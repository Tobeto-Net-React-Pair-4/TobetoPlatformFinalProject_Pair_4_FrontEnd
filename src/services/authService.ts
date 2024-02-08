import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { LoginCredentials } from "../models/requests/login/loginCredentials";
import { RegisterCredentials } from "../models/requests/register/registerCredentials";
import { RegisterResponse } from "../models/responses/register/registerResponse";
import { LoginResponse } from "../models/responses/login/loginResponse";

const loginUrl = "Auths/login";
const registerUrl = "Auths/register";

class AuthService {
	// modelleme
	register(
		credentials: RegisterCredentials
	): Promise<AxiosResponse<RegisterResponse, any>> {
		return axiosInstance.post(registerUrl, credentials);
	}

	login(
		credentials: LoginCredentials
	): Promise<AxiosResponse<LoginResponse, any>> {
		const response = axiosInstance.post(loginUrl, credentials);
		return response;
	}
}

export default new AuthService();
