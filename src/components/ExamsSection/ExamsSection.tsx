import React from "react";
import { Row, Col } from "react-bootstrap"; // React-Bootstrap kullanıyorsanız
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const ExamsSection: React.FC = () => {
	return (
		<Row>
			<Col xs={12}>
				<div className="tbt-exam-box">
					<div className="tbt-exam-title">Sınavlarım</div>
					<div className="tbt-exam-content">
						<Row>
							<Col>
								<div className="tbt-exam-name">
									Herkes için Kodlama 1D Değerlendirme Sınavı
									<span className="tbt-exam-statu">&nbsp;✓&nbsp;</span>
								</div>
							</Col>
						</Row>
						<div className="tbt-exam-subtitle">Herkes İçin Kodlama - 1D</div>
						<div className="tbt-exam-time">
							<FontAwesomeIcon icon={faClock} />
							<span style={{ color: "black" }}>45 Dakika</span>
						</div>
					</div>
				</div>
			</Col>
		</Row>
	);
};

export default ExamsSection;
