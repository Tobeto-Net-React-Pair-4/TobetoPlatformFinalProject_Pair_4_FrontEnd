import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap"; // React-Bootstrap kullanıyorsanız
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import { CourseGetListResponse } from "../../models/responses/course/courseGetListResponse";

const EducationCards: React.FC = () => {
	const courses = useSelector((state: any) => state.platform.courses.items);
	return (
		<div className="tab-my-edu">
			<div className="row">
				{courses.map((course: CourseGetListResponse) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
			<Row className="all-edu-btn">
				<div className="p-row-container">
					<Link to="/egitimlerim" className="link-full-row">
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

export default EducationCards;
