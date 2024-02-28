import { Row, Col } from "react-bootstrap";
import "./TrainingSection.css";
import { useSelector } from "react-redux";
import CourseCard from "../EducationCards/CourseCard";
import { CourseGetListResponse } from "../../models/responses/course/courseGetListResponse";

const TrainingSection: React.FC = () => {
	const courses = useSelector((state: any) => state.platform.courses.items);

	return (
		<>
			<Row>
				<Col md={12}>
					<div className="page-banner-card">
						<span>Eğitimlerim</span>
					</div>
				</Col>
			</Row>
			<div className="container" style={{ minHeight: "100vh" }}>
				<div className="filter-section mt-3">
					<div className="row">
						<div className="col-md-5 col-12 mb-4">
							<div className="searchBox search-box ">
								<input
									className="w-100"
									type="text"
									id="search"
									placeholder="Arama"
								/>
								<button>
									<div
										style={{
											display: "flex",
											justifyContent: "space-around",
											alignItems: "end",
										}}
									>
										<svg
											width={33}
											height={33}
											viewBox="0 0 33 33"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15.125 26.125C21.2001 26.125 26.125 21.2001 26.125 15.125C26.125 9.04987 21.2001 4.125 15.125 4.125C9.04987 4.125 4.125 9.04987 4.125 15.125C4.125 21.2001 9.04987 26.125 15.125 26.125Z"
												stroke="#828282"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M28.8758 28.8748L22.8945 22.8936"
												stroke="#828282"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M28.8758 28.8748L22.8945 22.8936"
												stroke="#828282"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</button>
							</div>
						</div>
						<div className="col-md-3 col-12 mb-4">
							<div className=" css-b62m3t-container">
								<span
									id="react-select-2-live-region"
									className="css-7pg0cj-a11yText"
								/>
								<span
									aria-live="polite"
									aria-atomic="false"
									aria-relevant="additions text"
									className="css-7pg0cj-a11yText"
								/>
								<div className="select__control css-13cymwt-control">
									<div className="select__value-container select__value-container--is-multi css-hlgwow">
										<div
											className="select__placeholder css-1jqq78o-placeholder"
											id="react-select-2-placeholder"
										>
											Kurum Seçiniz
										</div>
										<div
											className="select__input-container css-19bb58m"
											data-value
										>
											<input
												className="select__input"
												autoCapitalize="none"
												autoComplete="off"
												autoCorrect="off"
												id="react-select-2-input"
												spellCheck="false"
												tabIndex={0}
												type="text"
												aria-autocomplete="list"
												aria-expanded="false"
												aria-haspopup="true"
												role="combobox"
												aria-describedby="react-select-2-placeholder"
												style={{
													color: "inherit",
													background: "0px center",
													opacity: 1,
													width: "100%",
													gridArea: "1 / 2",
													font: "inherit",
													minWidth: "2px",
													border: "0px",
													margin: "0px",
													outline: "0px",
													padding: "0px",
												}}
											/>
										</div>
									</div>
									<div className="select__indicators css-1wy0on6">
										<span className="select__indicator-separator css-1u9des2-indicatorSeparator" />
										<div
											className="select__indicator select__dropdown-indicator css-1xc3v61-indicatorContainer"
											aria-hidden="true"
										>
											<svg
												height={20}
												width={20}
												viewBox="0 0 20 20"
												aria-hidden="true"
												focusable="false"
												className="css-8mmkcg"
											>
												<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
											</svg>
										</div>
									</div>
								</div>
								<div>
									<input name="organization" type="hidden" />
								</div>
							</div>
						</div>
						<div className="col-md-3 col-12 mb-4">
							<div className=" css-b62m3t-container">
								<span
									id="react-select-3-live-region"
									className="css-7pg0cj-a11yText"
								/>
								<span
									aria-live="polite"
									aria-atomic="false"
									aria-relevant="additions text"
									className="css-7pg0cj-a11yText"
								/>
								<div className="select__control css-13cymwt-control">
									<div className="select__value-container select__value-container--has-value css-hlgwow">
										<div className="select__single-value css-1dimb5e-singleValue">
											Adına Göre (A-Z)
										</div>
										<div
											className="select__input-container css-19bb58m"
											data-value
										>
											<input
												className="select__input"
												autoCapitalize="none"
												autoComplete="off"
												autoCorrect="off"
												id="react-select-3-input"
												spellCheck="false"
												tabIndex={0}
												type="text"
												aria-autocomplete="list"
												aria-expanded="false"
												aria-haspopup="true"
												role="combobox"
												style={{
													color: "inherit",
													background: "0px center",
													opacity: 1,
													width: "100%",
													gridArea: "1 / 2",
													font: "inherit",
													minWidth: "2px",
													border: "0px",
													margin: "0px",
													outline: "0px",
													padding: "0px",
												}}
											/>
										</div>
									</div>
									<div className="select__indicators css-1wy0on6">
										<span className="select__indicator-separator css-1u9des2-indicatorSeparator" />
										<div
											className="select__indicator select__dropdown-indicator css-1xc3v61-indicatorContainer"
											aria-hidden="true"
										>
											<svg
												height={20}
												width={20}
												viewBox="0 0 20 20"
												aria-hidden="true"
												focusable="false"
												className="css-8mmkcg"
											>
												<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
											</svg>
										</div>
									</div>
								</div>
								<input name="sort" type="hidden" defaultValue="name-asc" />
							</div>
						</div>
						<div className="col-md-1 col-12 mb-4 d-flex justify-content-end" />
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-12 mb-4">
						<ul
							className="nav nav-tabs mainTablist d-flex justify-content-center"
							id="myTab"
							role="tablist"
						>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link active"
									id="all-lessons-tab"
									data-bs-toggle="tab"
									data-bs-target="#all-lessons-tab-pane"
									type="button"
									role="tab"
									aria-controls="all-lessons-tab-pane"
									aria-selected="true"
								>
									Tüm Eğitimlerim
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link "
									id="started-tab"
									data-bs-toggle="tab"
									data-bs-target="#started-tab-pane"
									type="button"
									role="tab"
									aria-controls="started-tab-pane"
									aria-selected="false"
								>
									Devam Ettiklerim
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link "
									id="done-lessons-tab"
									data-bs-toggle="tab"
									data-bs-target="#done-lessons-tab-pane"
									type="button"
									role="tab"
									aria-controls="done-lessons-tab-pane"
									aria-selected="false"
								>
									Tamamladıklarım
								</button>
							</li>
						</ul>
					</div>
					<div className="col-12">
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="all-lessons-tab-pane"
								role="tabpanel"
								aria-labelledby="all-lessons-tab"
								tabIndex={0}
							>
								<div className="row">
									{courses?.map((course: CourseGetListResponse) => (
										<CourseCard key={course.id} course={course} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrainingSection;
