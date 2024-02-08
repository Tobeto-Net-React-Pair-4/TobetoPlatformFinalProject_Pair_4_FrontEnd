import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { HttpStatusCode } from "axios";
import * as Yup from "yup";
import toastr from "toastr";
import "./Login.css";
import authService from "../../services/authService";
import logoImage from "../Image/tobeto-logo.29b55e1c.svg";
import IstLogo from "../Image/ik-logo-dark.7938c0de.svg";
import { LoginCredentials } from "../../models/requests/login/loginCredentials";

const Login: React.FC = () => {
	const navigate = useNavigate();

	const validationSchema = Yup.object().shape({
		email: Yup.string().required("Doldurulması zorunlu alan*"),
		password: Yup.string().required("Doldurulması zorunlu alan*"),
	});

	const OnSubmit = async (values: LoginCredentials) => {
		const response = await authService.login({
			email: values.email,
			password: values.password,
		});
		if (response.status == HttpStatusCode.Ok) {
			localStorage.setItem("token", JSON.stringify({ ...response.data }));
			navigate("/platform");
			console.log("toastre başarılı giriş");
			toastr.success("Giriş başarılı.");
		} else {
			console.log("hatalııııı nerde toastr");
			toastr.error("Hatalı giriş");
			toastr.warning("aloooo");
		}
	};

	return (
		<Container fluid className="container">
			<Row className="container pt-20 row equal-col text-center ">
				<Col
					xs={6}
					md={6}
					lg={5}
					className="btn-rainbow-card mx-auto text-center col-md-6 col-12"
				>
					<Col className="py-4 px-sm-0 px-md-12 text-center ">
						<Col className="d-flex flex-column align-items-center">
							<Image
								src={logoImage}
								className="mb-4"
								style={{ maxWidth: "200px", height: "auto" }}
							/>
						</Col>
					</Col>
					<Col>
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
								<Button type="submit" className="btn btn-primary w-100 mt-6">
									<b>Giriş Yap</b>
								</Button>
							</Form>
						</Formik>
					</Col>
					<label>
						<small>
							<p
								style={{ cursor: "pointer" }}
								className="text-decoration-none text-muted mt-5 d-block"
							>
								Şifremi Unuttum
							</p>
						</small>
					</label>
					<Col className="col-12 mt-6">
						<Button
							className="text-decoration-none text-muted fw-bold"
							variant="link"
						>
							Henüz üye değil misin? Kayıt Ol
						</Button>
					</Col>
				</Col>

				<Col className="col-lg-5 col-md-6 col-xs-12 btn-rainbow-card-ik ">
					<Col className="ik-banner-big h-100">
						<Col>
							<Image
								src={IstLogo}
								alt="İstanbul Kodluyor Logo"
								className="mb-4"
								style={{ maxWidth: "200px", height: "auto" }}
							/>
							<span className="greenLine2"></span>
							<span className="text-blue fw-bold">
								Aradığın{" "}
								<span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>İş
								<span style={{ color: "rgb(0, 176, 120)" }}>"&nbsp;</span>{" "}
								Burada!
							</span>
							<Col className="d-flex w-100 flex-column justify-content-center align-items-center">
								<Button className="btn d-md-inline-block mt-5 btn-darkblue2">
									Başvur
								</Button>
							</Col>
						</Col>
					</Col>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
