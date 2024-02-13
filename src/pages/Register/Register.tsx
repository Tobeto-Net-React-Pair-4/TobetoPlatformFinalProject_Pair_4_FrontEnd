import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Register.css";
import logoImage from "../Image/tobeto-logo.29b55e1c.svg";
import IstLogo from "../Image/ik-logo-dark.7938c0de.svg";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import authService from "../../services/authService";
import { RegisterCredentials } from "../../models/requests/auth/registerCredentials";
import { HttpStatusCode } from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toastr from "toastr";

const Register: React.FC = () => {
	const navigate = useNavigate();

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required("Doldurulması zorunlu alan*"),
		lastName: Yup.string().required("Doldurulması zorunlu alan*"),
		email: Yup.string()
			.required("Doldurulması zorunlu alan*")
			.email("Geçersiz e-posta adresi*"),
		password: Yup.string().required("Doldurulması zorunlu alan*"),
		rePassword: Yup.string()
			.required("Doldurulması zorunlu alan*")
			.oneOf([Yup.ref("password")], "Parolalar eşleşmiyor*"),
	});

	const OnSubmit = async (values: RegisterCredentials) => {
		const response = await authService.register({
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			password: values.password,
		});
		console.log(response.data);
		if (response.status == HttpStatusCode.Ok) {
			localStorage.setItem("token", JSON.stringify({ ...response.data }));
			//navigate("/platform");
			toastr.success("Kayıt başarılı", "YEEEEEE");
		} else {
			toastr.error("Kayıt başarısız");
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
							<h3 className="mt-6">Hemen Kayıt Ol</h3>
						</Col>
					</Col>
					<Col>
						<Formik
							className="form-animated-border"
							initialValues={{
								firstName: "",
								lastName: "",
								email: "",
								password: "",
								rePassword: "",
							}}
							onSubmit={(values: RegisterCredentials) => {
								OnSubmit(values);
							}}
							validationSchema={validationSchema}
						>
							<Form data-hs-cf-bound="true" className="form-animated-border">
								<Field
									name="firstName"
									className="form-control mt-6"
									type="text"
									placeholder="Ad*"
								/>
								<ErrorMessage
									name="firstName"
									render={(error) => (
										<label style={{ color: "red" }}>{error}</label>
									)}
								/>
								<Field
									name="lastName"
									className="form-control mt-6"
									type="text"
									placeholder="Soyad*"
								/>
								<ErrorMessage
									name="lastName"
									render={(error) => (
										<label style={{ color: "red" }}>{error}</label>
									)}
								/>
								<Field
									name="email"
									className="form-control mt-6"
									type="email"
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
								<Field
									name="rePassword"
									className="form-control mt-6"
									type="password"
									placeholder="Şifre"
								/>
								<ErrorMessage
									name="rePassword"
									render={(error) => (
										<label style={{ color: "red" }}>{error}</label>
									)}
								/>
								<Button type="submit" className="btn btn-primary w-100 mt-6">
									<b>Kayıt Ol</b>
								</Button>
							</Form>
						</Formik>
					</Col>
					<Col className="col-12 mt-6 p-4">
						{/* <Button
              className="text-decoration-none text-muted "
              variant="link">
            </Button> */}
						<label>
							Zaten bir hesabın var mı?
							<Link to="/Login" className="text-decoration-none text-muted ">
								{" "}
								<b>Giriş Yap</b>
							</Link>
						</label>
					</Col>
				</Col>

				<Col className="col-lg-5 col-md-6 col-xs-12 btn-rainbow-card-ik ">
					<Col className="ik-banner-big2 h-100">
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

export default Register;
