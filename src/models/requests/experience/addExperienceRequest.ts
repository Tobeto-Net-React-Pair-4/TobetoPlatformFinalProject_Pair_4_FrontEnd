export interface AddExperienceRequest {
	userId: string;
	companyName: string;
	position: string;
	sector: string;
	city: string;
	businessStartDate: string;
	businessEndDate: string;
	status: boolean;
	businessDescription: string;
}
