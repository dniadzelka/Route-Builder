import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";

@Injectable()
export class RestService extends ApiService {
	
	// private static mapSmth(res: Response) {
	// 	return res.json().docs.map((data) => {
	// 		return RestService.toSmth(data);
	// 	});
	// }
	//
	// private static toSmth(data: any) {
	// 	return {
	// 		key: data.KEY,
	// 		value: data.VALUE
	// 	}
	// }

	// TODO: get address by lat, lng
	// http://maps.googleapis.com/maps/api/geocode/json?latlng=53.904540,27.561524&sensor=true

	getATMs() {
		return super.get('getATM', true);
	}

	getMinskAreas() {
		return super.get('getMinskAreas', false);
	}

	addATM(dataParams: any) {
		return super.post('addATM', dataParams, true);
	}

	deleteATM(dataParams: any) {
		return super.post('deleteATM', dataParams, true);
	}
}