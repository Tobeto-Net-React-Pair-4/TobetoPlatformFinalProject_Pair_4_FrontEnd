import React from "react";
import "./fonts/fonts.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import CustomNavbar from "./components/Nav/CustomNavbar";
import Footer from "./components/Footer/Footer";
import LoginFooter from "./components/LoginFooter/LoginFooter";
import Platform from "./pages/Platform/Platform";
import Navi from "./components/Navi/Navi";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PasswordReset from "./pages/PasswordReset/PassworReset";
import Homepage from "./pages/Homepage/Homepage";
import { OverlayLoader } from "./components/OverlayLoader/OverlayLoader";
import IstanbulKodluyor from "./pages/IstanbulKodluyor/IstanbulKodluyor";

const App: React.FC = () => {
	return (
		<div>
			<OverlayLoader />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Banner />
							<CustomNavbar />
							<Footer />
						</>
					}
				/>

				<Route
					path="/login"
					element={
						<>
							<Banner />
							<CustomNavbar />
							<div className="login-center">
								<Login />
							</div>
							<LoginFooter />
						</>
					}
				/>

				<Route
					path="/register"
					element={
						<>
							<Banner />
							<CustomNavbar />
							<div className="register-center">
								<Register />
							</div>
							<LoginFooter />
						</>
					}
				/>

				<Route
					path="/passwordreset"
					element={
						<>
							<Navi />
							<PasswordReset />
							<Footer />
						</>
					}
				/>
				<Route
					path="/platform"
					element={
						<>
							<Navi />
							<Platform />
							{/* <Footer /> */}
						</>
					}
				/>
				{/*<Route
						path="/homepage"
						element={
							<>
							<Homepage />
							</>
						}
					/>*/}
				<Route
					path="/istanbul-kodluyor"
					element={
						<IstanbulKodluyor/>
					}
				/>
					
				
			</Routes>
		</div>
	);
};

export default App;
