import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import logoIst from "../Image/ik-logo-light.ace655db.svg";
import "./Banner.css";

const Banner: React.FC = () => {
	return (
		<div className="banner-background">
			<Container>
				<Row className="align-items-center justify-content-between">
					<Col lg={1} sm={3}>
						<Image
							src={logoIst}
							className=" me-2 banner-custom-ml"
							style={{ width: "165px", height: "35px" }}
						/>
					</Col>
					<Col>
						<div className="banner-text text-center">
							<span className="block-line banner-text">Aradığın</span>
							<span className="block-line banner-text"><span>"</span>iş<span>"</span></span>
							<span className="block-line banner-text">Burada!</span>
						</div>
					</Col>
					<Col xs="auto">
						<Button className="custom-btn" variant="custom">
							Başvur
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Banner;
