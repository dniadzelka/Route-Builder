import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "./http-client.service";
import {ApiConfig} from "./api.config";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class ApiService {

	private config: ApiConfig = ApiConfig.getInstance();

	constructor(private httpClient: HttpClient) {
	}

	public get(endpointName: string, reloadCache?: boolean, extractData?: (value: Response) => {}, data?: any) {
		return this.request(endpointName, extractData || ApiService.extractData, data, this.httpClient.GET_METHOD, reloadCache);
	}

	public post(endpointName: string, data: any, reloadCache?: boolean, extractData?: (value: Response) => {}) {
		return this.request(endpointName, extractData || ApiService.extractData, data, this.httpClient.POST_METHOD, reloadCache);
	}

	public put(endpointName: string, data: any, reloadCache?: boolean, extractData?: (value: Response) => {}) {
		return this.request(endpointName, extractData || ApiService.extractData, data, this.httpClient.PUT_METHOD, reloadCache);
	}

	private request(endpointName: string, extractData: (value: Response) => {}, data: any, method: string, reloadCache?: boolean) {
		let endpointUrl = this.config.getEndpointUrl(endpointName, method, data);
		return this.httpClient
			.request(endpointUrl, method, data, reloadCache)
			.map(extractData)
			.catch(this.handleError.bind(this));
	}

	private static extractData(res: Response) {
		let body = res.json();
		return body.docs || {};
	}

	private handleError(error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}

		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}