import React from "react";
import "../Footer/Footer.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer fixed">
      <Container>
        <Row>
          <Col md={6}>
            <div className="text-center">
              <Link to="#">
                <Image
                  src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75"
                  width={"100px"}
                />
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Button className="btn btn-sm btn-light">Bize Ulaşın</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
