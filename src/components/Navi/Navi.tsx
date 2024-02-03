import {
  Navbar,
  Nav,
  Button,
  Dropdown,
  Collapse,
  ButtonGroup,
  Image,
} from "react-bootstrap";
import React from "react";
import "./Navi.css";
import TbtLogo from "../Image/tobeto-logo.png";
import ppImage from "../Image/13315.png";

const Navi: React.FC = () => {
  return (
    <>
      <div
        className="back-white"
        style={{ width: "100%", height: "0.5rem", overflow: "visible" }}
      >
        <Navbar
          className="position-relative navbar-expand-xxl bg-white  "
          expand="xxl"
        >
          <div className="container-fluid">
            <img
              src={TbtLogo}
              alt=""
              style={{ width: "165px", height: "35px" }}
              className="m-3"
            />
            <Button className="btn p-0 d-xxl-none navbar-burger"></Button>
            <Collapse>
              <Nav className="d-xxl-flex navbar-nav ms-auto">
                <Nav.Link
                  className="nav-link nav-link-custom nav-active"
                  href="#"
                >
                  Ana Sayfa
                </Nav.Link>
                <Nav.Link
                  className="nav-link nav-link-custom c-gray-3"
                  href="#"
                >
                  Profilim
                </Nav.Link>
                <Nav.Link
                  className="nav-link nav-link-custom c-gray-3"
                  href="#"
                >
                  Değerlendirmeler
                </Nav.Link>
                <Nav.Link
                  className="nav-link nav-link-custom c-gray-3"
                  href="#"
                >
                  Katalog
                </Nav.Link>
                <Nav.Link
                  className="nav-link nav-link-custom c-gray-3"
                  href="#"
                >
                  Takvim
                </Nav.Link>
                <Nav.Link
                  className="nav-link nav-link-custom c-gray-3"
                  href="#"
                >
                  İstanbul Kodluyor
                </Nav.Link>
              </Nav>
            </Collapse>
            <div className="ms-auto d-flex flex-column flex-xxl-row justify-content-center align-items-center">
              <Dropdown as={ButtonGroup} className="header-avatar">
                <Button
                  variant="light"
                  className="p-0 fw-normal b-r-35 text-end d-flex align-items-center"
                >
                  <Image
                    className="rounded-circle me-2"
                    style={{
                      width: "36px",
                      height: "36px",
                      objectFit: "cover",
                    }}
                    src={ppImage}
                    alt=""
                  />
                  <p className="mb-0 name me-3">Alper Çırak</p>
                </Button>

                <Dropdown.Toggle
                  split
                  variant="light"
                  id="dropdown-split-basic"
                  className="d-flex align-items-center" // Ensure the toggle button aligns with your other items
                >
                  {/* SVG icon here */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#828282"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu className="profile">
                  <Dropdown.Item href="#">Profil Bilgileri</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Oturumu Kapat</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Navi;
