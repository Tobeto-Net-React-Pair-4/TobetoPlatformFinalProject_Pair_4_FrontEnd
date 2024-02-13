import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import authService from "../services/authService";

export const useAuth = () => {
	const navigate = useNavigate();

	const isAuthenticated = () => {
		const token = localStorage.getItem("token");
		return !!token;
	};

	const login = useCallback(
		async (email: string, password: string) => {
			try {
				const response = await authService.login({ email, password });
				if (response.status === 200) {
					localStorage.setItem("token", JSON.stringify(response.data));
					toastr.success("Giriş başarılı", "Başarılı");
					navigate("/platform");
				}
			} catch (error) {
				toastr.error("Giriş başarısız", "Hata");
			}
		},
		[navigate]
	);

	return { login, isAuthenticated };
};
