import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "./Login.css";
import logoImage from "../Image/tobeto-logo.29b55e1c.svg";
import IstLogo from "../Image/ik-logo-dark.7938c0de.svg";
import axios from 'axios';
import React, { useState } from 'react';
import  {Link}  from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:31348/api/Auths/login",
        {
          email: email,
          password: password
        }
      );
      console.log("Login success:", response.data);
      // handle successful login, e.g., redirect to dashboard
    } catch (error) {
      setError("Giriş başarısız. Lütfen tekrar deneyin.");
      console.error("Login error:", error);
    }
  };
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
          <Form className="form-animated-border">
            <Form.Group className="mb-3">
              <Form.Control
                className="form-control mt-6"
                type="email"
                placeholder="Email adresi"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="form-control mt-6"
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {error && <p className="text-danger mt-2"><strong>{error}</strong></p>}
            <Button className="btn btn-primary w-100 mt-6" onClick={handleLogin}> <b>Giriş Yap</b></Button>
          </Form>
        </Col>
        <label>
          <small>
            <p
              style={{ cursor: "pointer" }}
              className="text-decoration-none text-muted mt-5 d-block"
            >
              Şifremi Unuttum
            </p>
          </small>
        </label>
        <Col className="col-12 mt-6 p-2">
          {/* <Button
            className="text-decoration-none text-muted fw-bold"
            variant="link"
          >
          </Button> */}
          <label>Henüz üye değil misin?
          <Link to="/Register"  className="text-decoration-none text-muted "> <b>Kayıt Ol</b></Link>
          </label> 
        </Col>
      </Col>

      <Col className="col-lg-5 col-md-6 col-xs-12 btn-rainbow-card-ik ">
        <Col className="ik-banner-big h-100">
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

export default Login;
