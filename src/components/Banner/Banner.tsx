import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import logoIst from "../Image/ik-logo-light.ace655db.svg";
import "./Banner.css";

const Banner: React.FC = () => {
	return (
		<div className="banner-background">
			<Container>
				<Row className="align-items-center justify-content-between">
					<Col lg={1} md={5} sm={12}>
						<Image
							src={logoIst}
							className=" me-2"
							style={{ width: "165px", height: "35px" }}
						/>
					</Col>
					<Col xs>
						<div className="banner-text text-center">
							Aradığın <span>"</span>iş<span>"</span> Burada!
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
