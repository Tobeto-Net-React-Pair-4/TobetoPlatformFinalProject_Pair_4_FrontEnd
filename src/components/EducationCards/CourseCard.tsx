import { Link } from "react-router-dom";
import eduImage from "../../pages/Image/23_ANF_1_2fa2e5b117.jpg";
import { CourseGetListResponse } from "../../models/responses/course/courseGetListResponse";

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
		<div className="col-md-3 col-12">
			<Link to="/activity" className="edu-card-link">
				<div className="edu-card">
					<div className="edu-card-image">
						<img src={eduImage} alt="Eğitim Görseli"></img>
					</div>
					<div className="edu-card-body">
						<h5 className="edu-card-title">{props.course.name}</h5>
						<p className="edu-card-date">
							{formatDateTime(props.course.startOfDate)}
						</p>
						<button className="edu-card-button">Eğitime Git</button>
					</div>
				</div>
			</Link>
		</div>
		
	);
};

export default CourseCard;
