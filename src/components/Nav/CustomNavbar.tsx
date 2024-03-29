import {
	Navbar,
	Nav,
	Button,
	Image,
	NavDropdown,
	Row,
	Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";
import TbtLogo from "../Image/Tebeto-logo-yatay-beyaz.png";

const CustomNavbar = () => {
	return (
		<Row>
			<Col lg={12} md={12} sm={12}>
				<Navbar
					collapseOnSelect
					expand="lg"
					variant="dark"
					bg="black"
					className="mb-5 navbi-custom"
				>
					<Image
						src={TbtLogo}
						className="me-4 mx-5"
						style={{ width: "165px", height: "35px" }}
					/>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav
							className="nav-custom  mr-auto justify-content-center "
							style={{ flex: 1 }}
						>
							<Nav.Link className="nav-link-color" href="#biz-kimiz">
								Biz Kimiz?
							</Nav.Link>
							<NavDropdown
								title="Neler Sunuyoruz?"
								id="nav-dropdown-neler-sunuyoruz"
								className="custom-dropdown nav-link-color"
							>
								<NavDropdown.Item href="#action/3.1">
									Bireyler için
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Kurumlar için
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link className="nav-link-color" href="#katalog">
								Katalog
							</Nav.Link>
							<Nav.Link className="nav-link-color" href="#codecademy">
								Codecademy
							</Nav.Link>
							<NavDropdown
								title="Tobeto'da Bu Ay"
								id="nav-dropdown-tobetoda-bu-ay"
								className="custom-dropdown nav-link-color"
							>
								<NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Basında Biz
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Takvim</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									İstanbul Kodluyor
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav className="d-flex justify-content-end">
							<Nav.Link href="/giris" className="me-2">
								<Button className="navb-btn" variant="text-light border-light">
									Giriş Yap
								</Button>
							</Nav.Link>
							<Nav.Link>
								<Link className="btn btn-rainbow navb2-btn mx-2" to="/kayit-ol">
									Ücretsiz Üye Ol
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Col>
		</Row>
	);
};

export default CustomNavbar;
