import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import About from "../../pages/About/About";
import Banner from "../Banner/Banner";
import CustomNavbar from "../Nav/CustomNavbar";
import Footer from "../Footer/Footer";
import LoginFooter from "../LoginFooter/LoginFooter";
import Platform from "../../pages/Platform/Platform";
import Navi from "../Navi/Navi";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import TrainingSection from "../TrainingSection/TrainingSection";
import AnnouncementSection from "../AnnouncementSection/AnnouncementSection";
import ForeignLanguage from "../../pages/ProfilePages/ForeignLanguage/ForeignLanguage";
import "../../fonts/fonts.css";
import IstanbulKodluyor from "../../pages/IstanbulKodluyor/IstanbulKodluyor";
import Activity from "../../pages/Activity/Activity";
import ProfileEdit from "../../pages/ProfileEdit/ProfileEdit";
import PersonalInfo from "../../pages/ProfilePages/PersonalInfo/PersonalInfo";

const RouteDefinitions: React.FC<Record<string, never>> = () => {
	interface LayoutProps {
		children: ReactNode;
	}
	return (
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
				path="/giris"
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
				path="/kayit-ol"
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
				path="/platform"
				element={
					<>
						<Navi />
						<Platform />
						<Footer />
					</>
				}
			/>
			<Route
				path="/egitimlerim"
				element={
					<>
						<Navi />
						<TrainingSection />
					</>
				}
			/>
			<Route
				path="/duyurular"
				element={
					<>
						<Navi />
						<AnnouncementSection />
					</>
				}
			/>
			<Route
				path="/diller"
				element={
					<>
						<Navi />
						<ForeignLanguage />
					</>
				}
			/>
			<Route
				path="/istanbul-kodluyor"
				element={
					<>
						<IstanbulKodluyor />
					</>
				}
			/>
			<Route
				path="/activity"
				element={
					<>
						<Activity />
					</>
				}
			/>

			<Route
				path="/personalinfo"
				element={
					<>
						<Navi />
						<PersonalInfo />
					</>
				}
			/>


			<Route path="/about" element={<About />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default RouteDefinitions;
