import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Login.css";
import logoImage from "../Image/tobeto-logo.29b55e1c.svg";
import IstLogo from "../Image/ik-logo-dark.7938c0de.svg";
import { login } from "../../store/auth/authSlice";
import { LoginCredentials } from "../../models/requests/auth/loginCredentials";
import userService from "../../services/userService";
import { getCourses, setUser } from "../../store/platform/platformSlice";
import { useDispatch } from "react-redux";
import authService from "../../services/authService";
import { HttpStatusCode } from "axios";
import toastr from "toastr";
import courseService from "../../services/courseService";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const validationSchema = Yup.object().shape({
		email: Yup.string().required("Doldurulması zorunlu alan*"),
		password: Yup.string().required("Doldurulması zorunlu alan*"),
	});

	const OnSubmit = async (values: LoginCredentials) => {
		const response = await authService.login({
			email: values.email,
			password: values.password,
		});
		console.log(response.data);
		if (response.status == HttpStatusCode.Ok) {
			localStorage.setItem("token", JSON.stringify({ ...response.data }));
			const userData = (await userService.getByMail(values.email)).data;
			const coursesData = (await courseService.getListByUserId(userData.id))
				.data;
			dispatch(getCourses(coursesData));
			dispatch(login());
			dispatch(setUser(userData));
			navigate("/platform");
			toastr.success("Giriş başarılı", "YEEEEEE");
		}
	};

	return (
		<div className="row equal-col">
			<div className="btn-rainbow-card mx-auto text-center col-md-6 col-12 ">
				<div className="py-4 px-sm-0 px-md-12 text-center">
					<div className="d-flex flex-column align-items-center">
						<img
							alt="Tobeto Logo"
							src={logoImage}
							style={{ maxWidth: "200px", height: "auto" }}
							className="mx-auto"
						/>
					</div>
					<Formik
						className="form-animated-border"
						initialValues={{ email: "", password: "" }}
						onSubmit={(values: LoginCredentials) => {
							OnSubmit(values);
						}}
						validationSchema={validationSchema}
					>
						<Form data-hs-cf-bound="true">
							<Field
								name="email"
								type="email"
								className="form-control mt-6"
								placeholder="E-Posta"
							/>
							<ErrorMessage
								name="email"
								render={(error) => (
									<label style={{ color: "red" }}>{error}</label>
								)}
							/>
							<Field
								name="password"
								className="form-control mt-6"
								type="password"
								placeholder="Şifre"
							/>
							<ErrorMessage
								name="password"
								render={(error) => (
									<label style={{ color: "red" }}>{error}</label>
								)}
							/>
							<button type="submit" className="btn btn-primary w-100 mt-6">
								Giriş Yap
							</button>
							<label>
								<small>
									<p
										className="text-decoration-none text-muted mt-5 d-block"
										style={{ cursor: "pointer" }}
									>
										Şifremi Unuttum
									</p>
								</small>
							</label>
						</Form>
					</Formik>
					<div className="col-12 mt-6">
						<label>
							<small>
								Henüz üye değil misin?
								<Link
									to="/kayit-ol"
									className="text-decoration-none text-muted "
								>
									{" "}
									<b>Kayıt Ol</b>
								</Link>
							</small>
						</label>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-12 btn-rainbow-card-ik">
				<div className="ik-banner-big h-100 flex-column">
					<img
						alt="İstanbul Kodluyor Logo"
						src={IstLogo}
						style={{ maxWidth: "200px", height: "auto" }}
						className="mx-auto"
					/>
					<span className="greenLine2"></span>
					<div>
						<span className="text-blue fw-bold">
							Aradığın <span style={{ color: "rgb(0, 176, 120)" }}>"İş"</span>{" "}
							Burada!
						</span>
					</div>
					<div className="d-flex w-100 flex-column justify-content-center align-items-center">
						<Link
							to="/istanbul-kodluyor"
							className="btn d-md-inline-block mt-5 btn-darkblue2"
						>
							Başvur
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
