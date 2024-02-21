import React, { useState, useEffect } from "react";
import {
	Navbar,
	Nav,
	Offcanvas,
	Button,
	Dropdown,
	ButtonGroup,
	Image,
} from "react-bootstrap";
import "./Navi.css";
import { Link, useNavigate } from "react-router-dom";
import TbtLogo from "../Image/tobeto-logo.png";
import ppImage from "../Image/13315.png";
import { logout } from "../../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeCourses, removeUser } from "../../store/platform/platformSlice";

const Navi: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const user = useSelector((state: any) => state.platform.user);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 992);
		};
		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userData");
		localStorage.removeItem("courses");
		dispatch(logout());
		dispatch(removeUser());
		dispatch(removeCourses());
		navigate("/giris");
		toastr.success("Çıkış başarılı", "YEEEEEEHU");
	};

	return (
		<>
			<div
				className="back-white"
				style={{ width: "100%", height: "0.5rem", overflow: "visible" }}
			>
				<Navbar className="position-relative bg-white" expand="lg">
					<div className="container-fluid">
						<img
							src={TbtLogo}
							alt=""
							style={{ width: "165px", height: "35px" }}
							className="m-3"
						/>

						{isMobile && (
							<Navbar.Toggle
								className="btn p-0 d-lg-none navbar-burger"
								onClick={handleShow}
								aria-controls="responsive-navbar-nav"
							/>
						)}
						<Navbar.Collapse id="responsive-navbar-nav">
							<Offcanvas show={show} onHide={handleClose} placement="start">
								<Offcanvas.Header closeButton>
									<img
										src={TbtLogo}
										alt=""
										style={{ width: "165px", height: "35px" }}
										className="m-3"
									/>
								</Offcanvas.Header>
								<Offcanvas.Body>
									<Nav className="justify-content-end flex-grow-1 pe-3">
										<Nav.Link
											href="/platform"
											className="nav-link-custom nav-active"
										>
											Ana Sayfa
										</Nav.Link>
										<Nav.Link href="#" className="nav-link-custom c-gray-3">
											Profilim
										</Nav.Link>
										<Nav.Link href="#" className="nav-link-custom c-gray-3">
											Değerlendirmeler
										</Nav.Link>
										<Nav.Link href="#" className="nav-link-custom c-gray-3">
											Katalog
										</Nav.Link>
										<Nav.Link href="#" className="nav-link-custom c-gray-3">
											Takvim
										</Nav.Link>
										<Nav.Link
											href="/istanbul-kodluyor"
											className="nav-link-custom c-gray-3"
										>
											İstanbul Kodluyor
										</Nav.Link>
									</Nav>
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
												<p className="mb-0 name me-3">
													{user.firstName + " " + user.lastName}
												</p>
											</Button>

											<Dropdown.Toggle
												split
												variant="light"
												id="dropdown-split-basic"
												className="d-flex align-items-center"
											>
												<svg
													width="24"
													height="24"
													viewBox="0 0 24 24"
													color="gray"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
														fill="#828282"
													></path>
												</svg>
											</Dropdown.Toggle>

											<Dropdown.Menu className="profile">
												<Dropdown.Item href="/profilim/pofilimi-duzenle/profil-bilgilerim">
													Profil Bilgileri
												</Dropdown.Item>
												<Dropdown.Divider />
												<Dropdown.Item href="#" onClick={handleLogout}>
													Oturumu Kapat
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</Offcanvas.Body>
							</Offcanvas>
						</Navbar.Collapse>
						{!isMobile && (
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className=" flex-grow-1 pe-3">
									<Nav.Link
										href="/platform"
										className="nav-link-custom nav-active"
									>
										Ana Sayfa
									</Nav.Link>
									<Nav.Link href="#" className="nav-link-custom c-gray-3">
										Profilim
									</Nav.Link>
									<Nav.Link href="#" className="nav-link-custom c-gray-3">
										Değerlendirmeler
									</Nav.Link>
									<Nav.Link href="#" className="nav-link-custom c-gray-3">
										Katalog
									</Nav.Link>
									<Nav.Link href="#" className="nav-link-custom c-gray-3">
										Takvim
									</Nav.Link>
									<Nav.Link
										href="/istanbul-kodluyor"
										className="nav-link-custom c-gray-3"
									>
										İstanbul Kodluyor
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						)}
						<Dropdown as={ButtonGroup} className="header-avatar-dropdown">
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
								<p className="mb-0 name me-3">
									{user.firstName + " " + user.lastName}
								</p>
							</Button>

							<Dropdown.Toggle
								split
								variant="light"
								id="dropdown-split-basic"
								className="d-flex align-items-center"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									color="gray"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
										fill="#828282"
									></path>
								</svg>
							</Dropdown.Toggle>

							<Dropdown.Menu className="profile">
								<Dropdown.Item href="/profilim/pofilimi-duzenle/profil-bilgilerim">
									Profil Bilgileri
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href="#" onClick={handleLogout}>
									Oturumu Kapat
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</Navbar>
			</div>
		</>
	);
};

export default Navi;
