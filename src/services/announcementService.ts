import { Paginate } from "../core/models/PaginateResponseModel";
import { BaseService } from "../core/services/baseService";
import { AddAnnouncementRequest } from "../models/requests/announcement/AddAnnouncementRequest";
import { UpdateAnnouncementRequest } from "../models/requests/announcement/updateAnnouncementRequest";
import { AddAnnouncementResponse } from "../models/responses/announcement/addAnnouncementResponse";
import { DeleteAnnouncementResponse } from "../models/responses/announcement/deleteAnnouncementResponse";
import { GetListAnnouncementResponse } from "../models/responses/announcement/getListAnnouncementResponse";
import { UpdateAnnouncementResponse } from "../models/responses/announcement/updateAnnouncementResponse";

class AnnouncementService extends BaseService<
	Paginate<GetListAnnouncementResponse>,
	null,
	AddAnnouncementRequest,
	AddAnnouncementResponse,
	UpdateAnnouncementRequest,
	UpdateAnnouncementResponse,
	DeleteAnnouncementResponse
> {
	constructor() {
		super();
		this.apiUrl = "Announcements";
	}
}

export default new AnnouncementService();
