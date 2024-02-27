import { Link } from "react-router-dom";
import eduImage from "../../pages/Image/23_ANF_1_2fa2e5b117.jpg";
import { CourseGetListResponse } from "../../models/responses/course/courseGetListResponse";
import "../TrainingSection/TrainingSection.css";

type Props = {
	course: CourseGetListResponse;
};

const CourseCard = (props: Props) => {
	function formatDateTime(dateTimeString: string): string {
		const date: Date = new Date(dateTimeString);

		const day: string = date.toLocaleDateString("tr-TR", { day: "numeric" });
		const month: string = date.toLocaleDateString("tr-TR", { month: "long" });
		const year: number = date.getFullYear();
		const hour: string = date.getHours().toString().padStart(2, "0");
		const minute: string = date.getMinutes().toString().padStart(2, "0");

		return `${day} ${month} ${year} ${hour}:${minute}`;
	}
	return (
		<div className="col-md-3 col-12 mb-4">
			<Link to="/activity" className="edu-card-link">
				<div className="corp-edu-card">
					<div
						className="card-img"
						style={{
							backgroundImage:
								'url("https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg")',
						}}
					/>
					<div className="card-content">
						<div className="d-flex flex-column">
							<span>{props.course.name}</span>
							<span className="platform-course-date">
								{formatDateTime(props.course.startOfDate)}
							</span>
						</div>
						<a className="apply-btn">Eğitime Git</a>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CourseCard;
