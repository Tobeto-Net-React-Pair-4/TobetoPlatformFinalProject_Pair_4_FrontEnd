import { Row, Col } from "react-bootstrap";
import "./AnnouncementSection.css";
import { useSelector } from "react-redux";
import { GetListAnnouncementResponse } from "../../models/responses/announcement/getListAnnouncementResponse";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AnnouncementSection: React.FC = () => {
	const announcements = useSelector(
		(state: any) => state.platform.announcements.items
	);

	function formatDate(dateString: string): string {
		const dateObject: Date = new Date(dateString);
		const formattedDate: string = dateObject.toLocaleDateString("tr-TR", {
			day: "numeric",
			month: "2-digit",
			year: "numeric",
		});
		return formattedDate;
	}

	return (
		<>
			<Row>
				<Col md={12}>
					<div className="page-banner-card2">
						<span>Duyurlarım</span>
					</div>
					<Row className="anc-row">
						{announcements?.map((announcement: GetListAnnouncementResponse) => (
							<Col key={announcement.id} className="anc-card">
								<Row>
									<Col>
										<div className="anc-title">
											{announcement.type}
											<span className="anc-ik">
												{announcement.organizationName}
											</span>
										</div>
										<br></br>
										<span className="anc-card-check">
											{announcement.title}
											<br></br>
											<br></br>
											<br></br>
										</span>
										<Row className="anc-date-row">
											<Col className="anc-date">
												<FontAwesomeIcon icon={faCalendar} />
												{formatDate(announcement.date)}
											</Col>
											<Col className="anc-link">
												<Link to={announcement.message} className="anc-link">
													Devamını Oku
												</Link>
											</Col>
										</Row>
									</Col>
								</Row>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default AnnouncementSection;
