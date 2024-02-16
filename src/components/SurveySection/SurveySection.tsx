import React from "react";
import { Row, Col } from "react-bootstrap"; // Assuming you're using React-Bootstrap

const SurveySection: React.FC = () => {
	return (
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
	);
};

export default SurveySection;
