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
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PersonalInfo from "../../pages/ProfilePages/PersonalInfo/PersonalInfo";
import Experience from "../../pages/ProfilePages/Experience/Experience";
import EducationLife from "../../pages/ProfilePages/EducationLife/EducationLife";
import Competence from "../../pages/ProfilePages/Competence/Competence";
import Profile from "../../pages/Profile/Profile";
import Certificat from "../../pages/ProfilePages/Certificat/Certificat";
import Setings from "../../pages/ProfilePages/Setings/Setings";
import SocialMedia from "../../pages/ProfilePages/SocialMedia/SocialMedia";

const RouteDefinitions: React.FC<Record<string, never>> = () => {
	const profileBasePath = "/profilim/pofilimi-duzenle";
	interface LayoutProps { children: ReactNode; }
	const basePath = 'profilim/profilimi-duzenle/kisisel-bilgilerim';
	const privatePersonalInfo = (path: string) => (
		<Route
			path={basePath + path}
			element={
				<PrivateRoute>
					<PersonalInfo />
				</PrivateRoute>
			}
		/>
	);
	return (
		<Routes>
			<Route path="/" element={<><Banner /><CustomNavbar /><Footer /></>} />
			<Route path="/giris" element={<><Banner /><CustomNavbar /><div className="login-center"><Login /></div><LoginFooter /></>} />
			<Route path="/kayit-ol" element={<><Banner /><CustomNavbar /><div className="register-center"><Register /></div><LoginFooter /></>} />
			<Route path="/platform" element={<><Navi /><PrivateRoute><Platform /></PrivateRoute><Footer /></>} />
			<Route path="/egitimlerim" element={<><Navi /><PrivateRoute><TrainingSection /></PrivateRoute></>} />
			<Route path="/duyurular" element={<><Navi /><PrivateRoute><AnnouncementSection /></PrivateRoute></>} />

			<Route path="/istanbul-kodluyor" element={<><IstanbulKodluyor /></>} />
			<Route path="/activity" element={<><PrivateRoute><Activity /></PrivateRoute></>} />



			{/* profilim/profilimi-duzenle/profil-bilgilerim */}
			<Route path="/profilim/profilimi-duzenle" element={<><Navi /> <ProfileEdit /> </>}>
				<Route path="/profilim/profilimi-duzenle/profil-bilgilerim" element={<><PrivateRoute><PersonalInfo /></PrivateRoute></>} />
				<Route path="/profilim/profilimi-duzenle/deneyimlerim" element={<><PrivateRoute><Experience /></PrivateRoute></>} />
				<Route path="/profilim/profilimi-duzenle/eğitim-hayatım" element={<> <PrivateRoute><EducationLife /></PrivateRoute></>} />
				<Route path="/profilim/profilimi-duzenle/yetkinliklerim" element={<><PrivateRoute><Competence /></PrivateRoute></>} />
				<Route path="/profilim/profilimi-duzenle/dillerim" element={<><PrivateRoute><ForeignLanguage /></PrivateRoute></>} />
				<Route path="/profilim/profilimi-duzenle/sertifikalar" element={<><PrivateRoute><Certificat /></PrivateRoute></>} />
				<Route path="/profilim/profilimi-duzenle/ayarlar" element={<><PrivateRoute><Setings /></PrivateRoute></>} />
				<Route path="/profilim/profilimi-duzenle/sosyal-medya" element={<><PrivateRoute><SocialMedia /></PrivateRoute></>} />
			</Route>
			{/* {<Route path="/profilim" element{<Profile/>}>
				<Route path="/profilimi-duzenle" element{<ProfileEdit/>}>
				</Route>
			</Route}		 */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default RouteDefinitions;
