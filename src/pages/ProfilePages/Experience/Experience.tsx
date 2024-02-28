import React from "react";
import ProfileEdit from "../../ProfileEdit/ProfileEdit";
import { Grid, Input, Radio, TextArea } from "semantic-ui-react";
import { Formik, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";
import DropdownCity from "../../../components/Dropdown/DropdownCity";
import { GetListExperienceResponse } from "../../../models/responses/experience/getListExperienceResponse";
import experienceService from "../../../services/experienceService";
import { AddExperienceRequest } from "../../../models/requests/experience/addExperienceRequest";
import { useSelector } from "react-redux";

const Experience: React.FC = () => {
	const initialValues = {
		userId: useSelector((state: any) => state.platform.user.id),
		companyName: "",
		position: "",
		sector: "",
		city: "",
		businessStartDate: "",
		businessEndDate: "",
		status: false,
		businessDescription: "",
	};

	const validationSchema = Yup.object().shape({
		companyName: Yup.string().required("Kurum Adı gereklidir."),
		position: Yup.string().required("Pozisyon gereklidir."),
		sector: Yup.string().required("Sektör gereklidir."),
		city: Yup.string().required("Şehir seçiniz."),
		businessStartDate: Yup.date().required("İş başlangıcı gereklidir."),
	});

	const onSubmit = async (values: AddExperienceRequest) => {
		const response = await experienceService.add(values);
		console.log(response.data);
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={(values: AddExperienceRequest) => {
					// Handle form submission here
					onSubmit(values);
				}}
				validationSchema={validationSchema}
			>
				{({}) => (
					<>
						<Grid.Row className="mt-6">
							<Grid container columns={2} relaxed stackable>
								<Grid.Column>
									<Grid.Row>
										<h4>Kurum Adı</h4>
									</Grid.Row>
									<Grid.Row>
										<Field
											name="companyName"
											type="text"
											placeholder="Kampüs 365"
										/>
										<ErrorMessage name="companyName" />
									</Grid.Row>
								</Grid.Column>
								<Grid.Column>
									<Grid.Row>
										<h4>Pozisyon</h4>
									</Grid.Row>
									<Grid.Row>
										<Field
											name="position"
											type="text"
											placeholder="Front-End Developer"
										/>
										<ErrorMessage name="position" />
									</Grid.Row>
								</Grid.Column>
								<Grid.Column>
									<Grid.Row>
										<h4>Sektör</h4>
									</Grid.Row>
									<Grid.Row>
										<Field name="sector" type="text" placeholder="Yazılım" />
										<ErrorMessage name="sector" />
									</Grid.Row>
								</Grid.Column>
								<Grid.Column>
									<Grid.Row>
										<h4>Şehir Seçiniz</h4>
									</Grid.Row>
									<Grid.Row>
										<DropdownCity // Replace with your DropdownCity component
										/>
									</Grid.Row>
								</Grid.Column>
								<Grid.Column>
									<Grid.Row>
										<h4>İş Başlangıcı</h4>
									</Grid.Row>
									<Grid.Row>
										<Field name="businessStartDate" type="date" />
										<ErrorMessage name="businessStartDate" />
									</Grid.Row>
								</Grid.Column>
								<Grid.Column>
									<Grid.Row>
										<h4>İş Bitiş</h4>
									</Grid.Row>
									<Grid.Row>
										<Field name="businessEndDate" type="date" />
										<ErrorMessage name="businessEndDate" />
									</Grid.Row>
								</Grid.Column>
								<Grid.Column />
								<Grid.Column>
									<Field
										type="checkbox"
										name="status"
										label="Çalışmaya Devam Ediyorum"
									/>
								</Grid.Column>
							</Grid>
							<Grid container columns={1} relaxed stackable>
								<Grid.Column>
									<Grid.Row>
										<h4>İş Açıklaması</h4>
									</Grid.Row>
									<Grid.Row>
										<Field
											as={TextArea}
											name="businessDescription"
											placeholder=""
											style={{ minHeight: 100 }}
										/>
										<ErrorMessage name="businessDescription" />
									</Grid.Row>
								</Grid.Column>
							</Grid>
						</Grid.Row>
						<button type="submit">Kaydet</button>
					</>
				)}
			</Formik>
		</>
	);
};

export default Experience;
