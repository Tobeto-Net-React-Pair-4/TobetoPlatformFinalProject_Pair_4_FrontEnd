import React, { useState } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import "../fonts/fonts.css";
import "./Platform.css";
import EducationCards from "../../components/EducationCards/EducationCards";
import AnnouncementCards from "../../components/AnnouncementCards/AnnouncementCards";
import SurveySection from "../../components/SurveySection/SurveySection";
import ExamsSection from "../../components/ExamsSection/ExamsSection";
import { useSelector } from "react-redux";

const LoginPlatform: React.FC = () => {
	const [activeTab, setActiveTab] = useState<string>("basvurularim");

	const user = useSelector((state: any) => state.platform.user);

	const handleTabClick = (selectedKey: string | null) => {
		if (selectedKey) {
			setActiveTab(selectedKey);
		}
	};

	return (
		<>
			<Container className="container">
				<Row className="row-custom-welcome">
					<Col xs={12} md={12} className="text-center">
						<h1 className="header-custom-welcome">
							TOBETO
							<span className="">
								'ya hoş geldin <br></br> {user.firstName + " " + user.lastName}
							</span>
						</h1>
						<p className="text-custom-welcome">
							Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
							yanında!
						</p>
					</Col>
					<Col xs={12} md={6} className="text-right dotted-image-container">
						<img
							src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
							alt="Purple Dots"
							className="img-fluid"
						/>
					</Col>
				</Row>

				<Row>
					<div className="tbt-platform-main">
						<Col className="tbt-platform-main-shadow ">
							<Row className="tbt-platform-logo">
								<img src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"></img>
							</Row>
							<Row className="tbt-platform-main-text2">
								Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
							</Row>
							<Row className="tbt-platform-main-text3">
								<Col>
									Aradığın{" "}
									<span className="tbt-platform-main-text3-span"> “ </span> İş{" "}
									<span className="tbt-platform-main-text3-span"> ” </span>{" "}
									Burada!
								</Col>
							</Row>
							<Row className="tbt-tabs">
								<div>
									<Row>
										<Col xs={12}>
											<Nav
												variant="tabs"
												activeKey={activeTab}
												onSelect={handleTabClick}
												className="custom-tab-list"
											>
												<Nav.Item>
													<Nav.Link
														eventKey="basvurularim"
														className="custom-tab-item"
													>
														Başvurularım
													</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link
														eventKey="my-edu"
														className="custom-tab-item"
													>
														Eğitimlerim
													</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link
														eventKey="announcement"
														className="custom-tab-item"
													>
														Duyurularım ve Haberlerim
													</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link
														eventKey="survey"
														className="custom-tab-item"
													>
														Anketlerim
													</Nav.Link>
												</Nav.Item>
											</Nav>
										</Col>
									</Row>

									<div className="custom-tab-content">
										{activeTab === "basvurularim" && (
											<div className="tab-basvurularim">
												<Row>
													<Col xs={12} md={5} className="tbt-basvuru-card">
														<Row>
															<Col xs={12} md={5}>
																İstanbul Kodluyor<br></br>Bilgilendirme<br></br>
																<span className="tbt-basvuru-card-check">
																	<span className="p-checkmark">&#10003;</span>{" "}
																	İstanbul Kodluyor Başvuru
																	&nbsp;&nbsp;&nbsp;Formu onaylandı.<br></br>
																	<span className="p-checkmark">
																		&#10003;
																	</span>{" "}
																	İstanbul Kodluyor Belge Yükleme Formu
																	onaylandı.
																</span>
															</Col>
															<Col className="text-right">
																<div className="status-indicator">
																	Kabul
																	Edildi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
																</div>
															</Col>
														</Row>
													</Col>
												</Row>
											</div>
										)}
										{activeTab === "my-edu" && <EducationCards />}
										{activeTab === "announcement" && <AnnouncementCards />}
										{activeTab === "survey" && <SurveySection />}
									</div>
								</div>
							</Row>
						</Col>
					</div>
					<ExamsSection />
					<Row className="new-packs my-10">
						<Col md={4} className="package-card">
							<div className="details pack-bg-2">
								<h1>Profilini oluştur</h1>
								<Button variant="primary" className="w-100">
									Başla
								</Button>
							</div>
						</Col>
						<Col md={4} className="package-card">
							<div className="details pack-bg-3">
								<h1 className="mb-6">Kendini değerlendir</h1>
								<Button variant="primary" className="w-100">
									Başla
								</Button>
							</div>
						</Col>
						<Col md={4} className="package-card">
							<div className="details pack-bg-1">
								<h1 className="mb-6">Öğrenmeye başla</h1>
								<Button variant="primary" className="w-100">
									Başla
								</Button>
							</div>
						</Col>
					</Row>
				</Row>
			</Container>
		</>
	);
};

export default LoginPlatform;
