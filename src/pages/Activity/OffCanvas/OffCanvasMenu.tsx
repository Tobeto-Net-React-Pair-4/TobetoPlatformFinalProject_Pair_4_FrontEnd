import Offcanvas from "react-bootstrap/Offcanvas";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
	faFileAlt,
	faIndustry,
	faGlobe,
	faList,
	faEye,
	faClock,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./OffCanvasMenu.css";

interface OffcanvasMenuProps {
	show: boolean;
	handleClose: () => void;
}

const OffcanvasMenu: React.FC<OffcanvasMenuProps> = ({ show, handleClose }) => {
	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			placement="end"
			className="off-canvas-menu"
		>
			<Offcanvas.Header closeButton></Offcanvas.Header>
			<Offcanvas.Body>
				<>
					<div className="row">
						<div className="" style={{ width: " 10px" }}></div>
						<div className="" style={{ width: " 160px" }}>
							<img
								src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
								className="education-image"
								alt="Eğitim Resmi"
							/>
						</div>

						<div className="col">
							<div className=" col-8 education-title">
								<div
									className="row "
									style={{
										marginTop: "38px",
										marginLeft: "-25px",
										fontSize: "16px",
										fontWeight: "bold",
										width: "320px",
									}}
								>
									.NET & React Fullstack | Öğrenme Yolculuğu{" "}
								</div>
								<div className="row  education-detail-row">
									<div
										className="row "
										style={{
											marginTop: "8px",
											marginLeft: "-15px",
											fontSize: "14px",
											fontWeight: "bold",
											width: "75px",
										}}
									>
										<div className="video-detail-button">VİDEO</div>
									</div>

									<div
										className="row "
										style={{
											marginTop: "8px",
											marginLeft: "-30px",
											fontSize: "12px",
											fontWeight: "bold",
											width: "65px",
											paddingTop: "1px",
										}}
									>
										<FontAwesomeIcon icon={faClock} className="clock-icon" />
									</div>
									<div
										className="row  time"
										style={{
											paddingTop: "4px",
											marginTop: "8px",
											marginLeft: "-13px",
											fontSize: "14px",
											fontWeight: "normal",
											width: "45px",
										}}
									>
										5dk
									</div>
									<div
										className="row  time"
										style={{
											paddingTop: "9px",
											marginTop: "8px",
											marginLeft: "-10px",
											fontSize: "12px",
											fontWeight: "bold",
											width: "45px",
										}}
									>
										<FontAwesomeIcon icon={faEye} />
									</div>
									<div
										className="row  time"
										style={{
											paddingTop: "4px",
											marginTop: "8px",
											marginLeft: "0px",
											fontSize: "14px",
											fontWeight: "normal",
											width: "45px",
										}}
									>
										11
									</div>
									<div
										className="row  time"
										style={{
											paddingTop: "11px",
											marginTop: "5px",
											marginLeft: "-14px",
											fontSize: "14px",
											fontWeight: "normal",
											width: "45px",
										}}
									>
										<FontAwesomeIcon icon={faHeart} />
									</div>
									<div
										className="row  time"
										style={{
											paddingTop: "7px",
											marginTop: "5px",
											marginLeft: "0px",
											fontSize: "14px",
											fontWeight: "normal",
											width: "45px",
										}}
									>
										65
									</div>
								</div>
							</div>
						</div>
						<div className="col " style={{ marginTop: "40px" }}>
							<div className="row  " style={{ marginBottom: "25px" }}>
								<span className="go-education-button">EĞİTİME GİT </span>
							</div>
							<Row className="education-time-detail">
								<Col className="ok-icon">
									{" "}
									<FontAwesomeIcon icon={faThumbsUp} />
									&nbsp;Tebrikler,&nbsp;&nbsp;&nbsp;tamamladın!
								</Col>
								<Col>100 puan</Col>
							</Row>
						</div>
					</div>
					<Row>
						<Col className="">
							<Row className="custom-education-detail-container">
								<table>
									<tr>
										<td>
											<FontAwesomeIcon icon={faList} className="icon" />
										</td>
										<td>Kategori</td>
										<td className="custom-education-detail">
											İş'te Mükemmellik / Programlama / Programlama
										</td>
									</tr>
									<tr>
										<td>
											<FontAwesomeIcon icon={faGlobe} className="icon" />
										</td>
										<td>Dili</td>
										<td className="custom-education-detail">Türkçe</td>
									</tr>
									<tr>
										<td>
											<FontAwesomeIcon icon={faFileAlt} className="icon" />
										</td>
										<td>Alt Tip</td>
										<td className="custom-education-detail">
											Konu Uzmanı Videosu
										</td>
									</tr>
									<tr>
										<td>
											<FontAwesomeIcon icon={faIndustry} className="icon" />
										</td>
										<td>Üretici Firma</td>
										<td className="custom-education-detail">Enocta</td>
									</tr>
								</table>
							</Row>
						</Col>
					</Row>
					<Row>
						<Row style={{ paddingLeft: "80px", fontWeight: "bold" }}>
							İçerik
						</Row>
						<Row
							style={{
								paddingLeft: "80px",
								paddingTop: "20px",
								textAlign: "left",
							}}
						>
							Bu video, Veri Tabanı ve Erişimi: Microsoft SQL Server Database
							Management eğitiminde aktarılan konular hakkında toparlayıcı ve
							özet bilgilerin yer aldığı bir kapanış videosudur.
						</Row>
					</Row>
				</>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default OffcanvasMenu;
