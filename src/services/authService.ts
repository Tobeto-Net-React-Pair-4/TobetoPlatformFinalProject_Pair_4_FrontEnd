import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { LoginCredentials } from "../models/requests/auth/loginCredentials";
import { RegisterCredentials } from "../models/requests/auth/registerCredentials";
import { RegisterResponse } from "../models/responses/auth/registerResponse";
import { LoginResponse } from "../models/responses/auth/loginResponse";

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
