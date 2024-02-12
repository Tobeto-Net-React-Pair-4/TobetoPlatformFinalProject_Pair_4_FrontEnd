import React, { useState } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faCalendar,
	faClock,
} from "@fortawesome/free-solid-svg-icons";
import eduImage from "../Image/23_ANF_1_2fa2e5b117.jpg";
import "../fonts/fonts.css";
import "./Platform.css";
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

										{activeTab === "my-edu" && (
											<div className="tab-my-edu">
												<Row>
													<Col>
														<Row className="edus-row">
															<Link to="/activity" className="edu-card-link  ">
																<div className="edu-card">
																	<div className="edu-card-image">
																		<img src={eduImage}></img>
																	</div>
																	<div className="edu-card-body">
																		<h5 className="edu-card-title">
																			.NET & React Fullstack | Öğrenme Yolculuğu
																		</h5>
																		<p className="edu-card-date">
																			21 Eylül 2023 15:20
																		</p>
																		<button className="edu-card-button">
																			Eğitime Git
																		</button>
																	</div>
																</div>
															</Link>
															<Link to="/activity" className="edu-card-link  ">
																<div className="edu-card">
																	<div className="edu-card-image">
																		<img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
																	</div>
																	<div className="edu-card-body">
																		<h5 className="edu-card-title">
																			.NET & React Fullstack | Öğrenme Yolculuğu
																		</h5>
																		<p className="edu-card-date">
																			21 Eylül 2023 15:20
																		</p>
																		<button className="edu-card-button">
																			Eğitime Git
																		</button>
																	</div>
																</div>
															</Link>{" "}
															<Link to="/activity" className="edu-card-link  ">
																<div className="edu-card">
																	<div className="edu-card-image">
																		<img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
																	</div>
																	<div className="edu-card-body">
																		<h5 className="edu-card-title">
																			.NET & React Fullstack | Öğrenme Yolculuğu
																		</h5>
																		<p className="edu-card-date">
																			21 Eylül 2023 15:20
																		</p>
																		<button className="edu-card-button">
																			Eğitime Git
																		</button>
																	</div>
																</div>
															</Link>{" "}
															<Link to="/activity" className="edu-card-link  ">
																<div className="edu-card">
																	<div className="edu-card-image">
																		<img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
																	</div>
																	<div className="edu-card-body">
																		<h5 className="edu-card-title">
																			.NET & React Fullstack | Öğrenme Yolculuğu
																		</h5>
																		<p className="edu-card-date">
																			21 Eylül 2023 15:20
																		</p>
																		<button className="edu-card-button">
																			Eğitime Git
																		</button>
																	</div>
																</div>
															</Link>
														</Row>
													</Col>
												</Row>
												<Row className="all-edu-btn  ">
													<div className="p-row-container">
														<a href="/egitimlerim" className="link-full-row">
															<button className="load-more-btn">
																<FontAwesomeIcon
																	icon={faChevronRight}
																	className="p-button-icon"
																/>
																<span style={{ color: "black" }}>
																	Daha Fazla Göster
																</span>
															</button>
														</a>
													</div>
												</Row>
											</div>
										)}
										{activeTab === "announcement" && (
											<div className="tab-announcement">
												{" "}
												<Row>
													<Col>
														<Row className="anc-row">
															<Col className="anc-card">
																<Row>
																	<Col>
																		<div className="anc-title">
																			Duyuru{" "}
																			<span className="anc-ik">
																				İstanbul Kodluyor
																			</span>
																		</div>
																		<br></br>
																		<span className="anc-card-check">
																			Ocak Ayı Tercih Formu Bilgilendirmesi
																			<br></br>
																			<br></br>
																			<br></br>
																		</span>
																		<Row className="anc-date-row">
																			<Col className="anc-date">
																				<FontAwesomeIcon icon={faCalendar} />{" "}
																				12.01.2024{" "}
																			</Col>
																			<Col className="anc-link ">
																				{" "}
																				<Link
																					to="/announcement"
																					className="anc-link "
																				>
																					Devamını Oku
																				</Link>
																			</Col>
																		</Row>
																	</Col>
																</Row>
															</Col>
															<Col className="anc-card">
																<Row>
																	<Col>
																		<div className="anc-title">
																			Duyuru{" "}
																			<span className="anc-ik">
																				İstanbul Kodluyor
																			</span>
																		</div>
																		<br></br>
																		<span className="anc-card-check">
																			Ocak Ayı Tercih Formu Bilgilendirmesi
																			<br></br>
																			<br></br>
																			<br></br>
																		</span>
																		<Row className="anc-date-row">
																			<Col className="anc-date">
																				<FontAwesomeIcon icon={faCalendar} />{" "}
																				12.01.2024{" "}
																			</Col>
																			<Col className="anc-link ">
																				{" "}
																				<Link
																					to="/announcement"
																					className="anc-link "
																				>
																					Devamını Oku
																				</Link>
																			</Col>
																		</Row>
																	</Col>
																</Row>
															</Col>
															<Col className="anc-card">
																<Row>
																	<Col>
																		<div className="anc-title">
																			Duyuru{" "}
																			<span className="anc-ik">
																				İstanbul Kodluyor
																			</span>
																		</div>
																		<br></br>
																		<span className="anc-card-check">
																			Ocak Ayı Tercih Formu Bilgilendirmesi
																			<br></br>
																			<br></br>
																			<br></br>
																		</span>
																		<Row className="anc-date-row">
																			<Col className="anc-date">
																				<FontAwesomeIcon icon={faCalendar} />{" "}
																				12.01.2024{" "}
																			</Col>
																			<Col className="anc-link ">
																				{" "}
																				<Link
																					to="/announcement"
																					className="anc-link "
																				>
																					Devamını Oku
																				</Link>
																			</Col>
																		</Row>
																	</Col>
																</Row>
															</Col>
														</Row>
													</Col>
												</Row>
												<Row className="all-edu-btn  ">
													<div className="p-row-container">
														<a href="/egitimlerim" className="link-full-row">
															<button className="load-more-btn">
																<FontAwesomeIcon
																	icon={faChevronRight}
																	className="p-button-icon"
																/>
																<span style={{ color: "black" }}>
																	Daha Fazla Göster
																</span>
															</button>
														</a>
													</div>
												</Row>
											</div>
										)}
										{activeTab === "survey" && (
											<div className="tab-survey">
												<Row>
													<Col className="survey-area">
														<img
															src="https://tobeto.com/_next/static/media/notFound.4015d44b.svg"
															alt="Not Found"
															className="survey-img"
														/>
														<div className="survey-text">
															Atanmış herhangi bir anketiniz bulunmamaktadır
														</div>
													</Col>
												</Row>
											</div>
										)}
									</div>
								</div>
							</Row>
						</Col>
					</div>

					<Row>
						<Col xs={12}>
							<div className="tbt-exam-box">
								<div className="tbt-exam-title">Sınavlarım</div>
								<div className="tbt-exam-content">
									<Row>
										<Col>
											<div className="tbt-exam-name">
												Herkes İçin Kodlama 1D Değerlendirme Sınavı
												<span className="tbt-exam-statu">&nbsp;✓&nbsp;</span>
											</div>
										</Col>
									</Row>
									<div className="tbt-exam-subtitle">
										Herkes İçin Kodlama - 1D
									</div>
									<div className="tbt-exam-time">
										<FontAwesomeIcon icon={faClock} />
										<span style={{ color: "black" }}>45 Dakika</span>
									</div>
								</div>
							</div>
						</Col>
					</Row>

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
