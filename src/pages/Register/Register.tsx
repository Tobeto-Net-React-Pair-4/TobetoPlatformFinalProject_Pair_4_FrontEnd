import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "./Register.css";
import logoImage from "../Image/tobeto-logo.29b55e1c.svg";
import IstLogo from "../Image/ik-logo-dark.7938c0de.svg";
import  {Link}  from "react-router-dom";

const Register = () => {
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
                  type="name"
                  placeholder="Ad*"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="form-control mt-6"
                  type="surName"
                  placeholder="Soyad*"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="form-control mt-6"
                  type="email"
                  placeholder="Email adresi"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="form-control mt-6"
                  type="password"
                  placeholder="Şifre"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="form-control mt-6"
                  type="password"
                  placeholder="Şifre tekrar*"
                />
              </Form.Group>
              <Button className="btn btn-primary w-100 mt-6"><b>Kayıt Ol</b></Button>
            </Form>
          </Col>
          <label>
            <small>
              <p
                style={{ cursor: "pointer" }}
                className="text-decoration-none text-muted mt-4 d-block"
              >
                Şifremi Unuttum
              </p>
            </small>
          </label>
          <Col className="col-12 mt-6 p-2">
            {/* <Button
              className="text-decoration-none text-muted "
              variant="link">
            </Button> */}
            <Link to="/Login"  className="text-decoration-none text-muted "> Zaten bir hesabın var mı? <b>Giriş Yap</b></Link>
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

export default Register;
