import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap"; // React-Bootstrap kullanıyorsanız
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import eduImage from "../../pages/Image/23_ANF_1_2fa2e5b117.jpg";

const EducationCards: React.FC = () => {
	return (
		<div className="tab-my-edu">
			<Row >
				<Col className="col-md-3 col-12">
					<Row className="edus-row">
						<Link to="/activity" className="edu-card-link">
							<div className="edu-card">
								<div className="edu-card-image">
									<img src={eduImage} alt="Eğitim Görseli"></img>
								</div>
								<div className="edu-card-body">
									<h5 className="edu-card-title">
										.NET & React Fullstack | Öğrenme Yolculuğu
									</h5>
									<p className="edu-card-date">21 Eylül 2023 15:20</p>
									<button className="edu-card-button">Eğitime Git</button>
								</div>
							</div>
						</Link>
					</Row>
				</Col>
				<Col  className="col-md-3 col-12">
					<Row className="edus-row">
						<Link to="/activity" className="edu-card-link">
							<div className="edu-card">
								<div className="edu-card-image">
									<img src={eduImage} alt="Eğitim Görseli"></img>
								</div>
								<div className="edu-card-body">
									<h5 className="edu-card-title">
										.NET & React Fullstack | Öğrenme Yolculuğu
									</h5>
									<p className="edu-card-date">21 Eylül 2023 15:20</p>
									<button className="edu-card-button">Eğitime Git</button>
								</div>
							</div>
						</Link>
					</Row>
				</Col>
				<Col  className="col-md-3 col-12">
					<Row className="edus-row">
						<Link to="/activity" className="edu-card-link">
							<div className="edu-card">
								<div className="edu-card-image">
									<img src={eduImage} alt="Eğitim Görseli"></img>
								</div>
								<div className="edu-card-body">
									<h5 className="edu-card-title">
										.NET & React Fullstack | Öğrenme Yolculuğu
									</h5>
									<p className="edu-card-date">21 Eylül 2023 15:20</p>
									<button className="edu-card-button">Eğitime Git</button>
								</div>
							</div>
						</Link>
					</Row>
				</Col>
				<Col className="col-md-3 col-12">
					<Row className="edus-row">
						<Link to="/activity" className="edu-card-link">
							<div className="edu-card">
								<div className="edu-card-image">
									<img src={eduImage} alt="Eğitim Görseli"></img>
								</div>
								<div className="edu-card-body">
									<h5 className="edu-card-title">
										.NET & React Fullstack | Öğrenme Yolculuğu
									</h5>
									<p className="edu-card-date">21 Eylül 2023 15:20</p>
									<button className="edu-card-button">Eğitime Git</button>
								</div>
							</div>
						</Link>
					</Row>
				</Col>
				<Col className="col-md-3 col-12">
					<Row className="edus-row">
						<Link to="/activity" className="edu-card-link">
							<div className="edu-card">
								<div className="edu-card-image">
									<img src={eduImage} alt="Eğitim Görseli"></img>
								</div>
								<div className="edu-card-body">
									<h5 className="edu-card-title">
										.NET & React Fullstack | Öğrenme Yolculuğu
									</h5>
									<p className="edu-card-date">21 Eylül 2023 15:20</p>
									<button className="edu-card-button">Eğitime Git</button>
								</div>
							</div>
						</Link>
					</Row>
				</Col>
				<Col className="col-md-3 col-12">
					<Row className="edus-row">
						<Link to="/activity" className="edu-card-link">
							<div className="edu-card">
								<div className="edu-card-image">
									<img src={eduImage} alt="Eğitim Görseli"></img>
								</div>
								<div className="edu-card-body">
									<h5 className="edu-card-title">
										.NET & React Fullstack | Öğrenme Yolculuğu
									</h5>
									<p className="edu-card-date">21 Eylül 2023 15:20</p>
									<button className="edu-card-button">Eğitime Git</button>
								</div>
							</div>
						</Link>
					</Row>
				</Col>
				<Col className="col-md-3 col-12">
					<Row className="edus-row">
						<Link to="/activity" className="edu-card-link">
							<div className="edu-card">
								<div className="edu-card-image">
									<img src={eduImage} alt="Eğitim Görseli"></img>
								</div>
								<div className="edu-card-body">
									<h5 className="edu-card-title">
										.NET & React Fullstack | Öğrenme Yolculuğu
									</h5>
									<p className="edu-card-date">21 Eylül 2023 15:20</p>
									<button className="edu-card-button">Eğitime Git</button>
								</div>
							</div>
						</Link>
					</Row>
				</Col>
				<Col className="col-md-3 col-12">
					<Row className="edus-row">
						<Link to="/activity" className="edu-card-link">
							<div className="edu-card">
								<div className="edu-card-image">
									<img src={eduImage} alt="Eğitim Görseli"></img>
								</div>
								<div className="edu-card-body">
									<h5 className="edu-card-title">
										.NET & React Fullstack | Öğrenme Yolculuğu
									</h5>
									<p className="edu-card-date">21 Eylül 2023 15:20</p>
									<button className="edu-card-button">Eğitime Git</button>
								</div>
							</div>
						</Link>
					</Row>
				</Col>
			</Row>
			<Row className="all-edu-btn">
				<div className="p-row-container">
					<Link to="/egitimlerim" className="link-full-row">
						<button className="load-more-btn">
							<FontAwesomeIcon
								icon={faChevronRight}
								className="p-button-icon"
							/>
							<span style={{ color: "black" }}>Daha Fazla Göster</span>
						</button>
					</Link>
				</div>
			</Row>
		</div>
	);
};

export default EducationCards;
