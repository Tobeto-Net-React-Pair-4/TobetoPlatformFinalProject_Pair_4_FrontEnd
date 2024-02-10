import { AxiosResponse } from "axios";
import axiosInstance from "../interceptors/axiosInceptor";

export class BaseService<
	GetAllResponseType,
	GetResponseType,
	AddRequestType,
	AddResponseType,
	UpdateRequestType,
	UpdateResponseType,
	DeleteResponseType
> {
	public apiUrl: string;

	constructor() {
		this.apiUrl = "";
	}

	getAll(): Promise<AxiosResponse<GetAllResponseType, any>> {
		return axiosInstance.get<GetAllResponseType>(this.apiUrl + "/GetList");
	}

	getById(id: string): Promise<AxiosResponse<GetResponseType, any>> {
		return axiosInstance.get<GetResponseType>(this.apiUrl + "/GetById", {
			params: { Id: id },
		});
	}

	add(request: AddRequestType): Promise<AxiosResponse<AddResponseType, any>> {
		return axiosInstance.post<AddResponseType>(this.apiUrl, request);
	}

	update(
		request: UpdateRequestType
	): Promise<AxiosResponse<UpdateResponseType, any>> {
		return axiosInstance.put<UpdateResponseType>(
			this.apiUrl + "/Update",
			request
		);
	}

	delete(id: string): Promise<AxiosResponse<DeleteResponseType, any>> {
		return axiosInstance.delete<DeleteResponseType>(
			this.apiUrl + "/Delete" + id
		);
	}
}
