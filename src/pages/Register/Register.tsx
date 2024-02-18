import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import logoImage from "../Image/tobeto-logo.29b55e1c.svg";
import IstLogo from "../Image/ik-logo-dark.7938c0de.svg";
import "./Register.css"

const Register: React.FC = () => {
  return (
    <Container fluid className="container">
      <Row className="container pt-20 row equal-col text-center ">
        <Col
          xs={6}
          md={6}
          lg={5}
          className="btn-rainbow-card mx-auto text-center col-md-6 col-12"
        >
          <Col className="py-4 px-sm-0 px-md-12 text-center ">
            <Col className="d-flex flex-column align-items-center">
              <Image
                src={logoImage}
                className="mb-4"
                style={{ maxWidth: "200px", height: "auto" }}
              />
            </Col>
          </Col>
          <Col>
            <RegisterForm />
          </Col>
        </Col>

        <Col className="col-lg-5 col-md-6 col-xs-12 btn-rainbow-card-ik ">
          <Col className="ik-banner-big2 h-100">
            <Col>
              <Image
                src={IstLogo}
                alt="İstanbul Kodluyor Logo"
                className="mb-4"
                style={{ maxWidth: "200px", height: "auto" }}
              />
              <span className="greenLine2"></span>
              <span className="text-blue fw-bold">
                Aradığın{" "}
                <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>İş
                <span style={{ color: "rgb(0, 176, 120)" }}>"&nbsp;</span>{" "}
                Burada!
              </span>
              <Col className="d-flex w-100 flex-column justify-content-center align-items-center">
                <Button className="btn d-md-inline-block mt-5 btn-darkblue2">
                  Başvur
                </Button>
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;