import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Announcement {
	id: number;
	title: string;
	content: string;
	date: string;
	readMoreLink: string;
}

const exampleAnnouncements: Announcement[] = [
	{
		id: 1,
		title: "Duyuru",
		content: "Mindset Anketi",
		date: "31.01.2024",
		readMoreLink: "/announcement",
	},
	// Additional announcements can be added here
];

const AnnouncementCards: React.FC = () => {
	return (
		<div className="tab-announcement">
			<Row>
				<Col>
					<Row className="anc-row">
						{exampleAnnouncements.map((announcement) => (
							<Col key={announcement.id} className="anc-card">
								<Row>
									<Col>
										<div className="anc-title">
											{announcement.title}{" "}
											<span className="anc-ik">İstanbul Kodluyor</span>
										</div>
										<br></br>
										<span className="anc-card-check">
											{announcement.content}
											<br></br>
											<br></br>
											<br></br>
										</span>
										<Row className="anc-date-row">
											<Col className="anc-date">
												<FontAwesomeIcon icon={faCalendar} />{" "}
												{announcement.date}
											</Col>
											<Col className="anc-link">
												<Link
													to={announcement.readMoreLink}
													className="anc-link"
												>
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
					<a href="/duyurular	" className="link-full-row">
						<button className="load-more-btn">
							<FontAwesomeIcon
								icon={faChevronRight}
								className="p-button-icon"
							/>
							<span style={{ color: "black" }}>Daha Fazla Göster</span>
						</button>
					</a>
				</div>
			</Row>
		</div>
	);
};

export default AnnouncementCards;
