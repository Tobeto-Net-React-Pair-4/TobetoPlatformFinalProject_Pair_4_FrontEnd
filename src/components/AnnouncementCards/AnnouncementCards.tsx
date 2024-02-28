import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { GetListAnnouncementResponse } from "../../models/responses/announcement/getListAnnouncementResponse";

const AnnouncementCards: React.FC = () => {
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
		<div className="tab-announcement">
			<Row>
				<Col>
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
			<Row className="all-edu-btn">
				<div className="p-row-container">
					<Link to="/duyurular	" className="link-full-row">
						<button className="load-more-btn">
							<FontAwesomeIcon
								icon={faChevronRight}
								className="p-button-icon"
							/>
							<span style={{ color: "black" }}>Daha Fazla Göster</span>
						</button>
					</Link>
				</div>
			</Row>
		</div>
	);
};

export default AnnouncementCards;
