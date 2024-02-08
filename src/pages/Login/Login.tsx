import "./Login.css";
import logoImage from "../Image/tobeto-logo.29b55e1c.svg";
import IstLogo from "../Image/ik-logo-dark.7938c0de.svg";

const Login = () => {
	return (
		<div className="row equal-col">
			<div className="btn-rainbow-card mx-auto text-center col-md-6 col-12">
				<div className="py-4 px-sm-0 px-md-12 text-center">
					<div className="d-flex flex-column align-items-center">
						<img
							alt="Tobeto Logo"
							src={logoImage}
							style={{ maxWidth: "200px", height: "auto" }}
							className="mx-auto"
						/>
					</div>
					<form action="#" data-hs-cf-bound="true">
						<input
							name="email"
							className="form-control mt-6"
							placeholder="E-Posta"
						/>
						<input
							name="password"
							className="form-control mt-6"
							type="password"
							placeholder="Şifre"
						/>
						<button className="btn btn-primary w-100 mt-6">Giriş Yap</button>
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
					</form>
					<div className="col-12 mt-6">
						<label>
							<small>
								Henüz üye değil misin?
								<a
									className="text-decoration-none text-muted fw-bold"
									href="/kayit-ol"
								>
									{" "}
									Kayıt Ol
								</a>
							</small>
						</label>
					</div>
				</div>
			</div>

			<div className="col-md-6 col-12 btn-rainbow-card-ik">
				<div className="ik-banner-big h-100">
					<img
						alt="İstanbul Kodluyor Logo"
						src={IstLogo}
						style={{ maxWidth: "200px", height: "auto" }}
						className="mx-auto"
					/>
					<div>
						<span className="text-blue fw-bold">
							Aradığın <span style={{ color: "rgb(0, 176, 120)" }}>"İş"</span>{" "}
							Burada!
						</span>
					</div>
					<div className="d-flex w-100 flex-column justify-content-center align-items-center">
						<button className="btn d-md-inline-block mt-5 btn-darkblue2">
							Başvur
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
