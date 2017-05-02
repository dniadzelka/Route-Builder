import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";

@Injectable()
export class HttpClient {
	public GET_METHOD: string = 'GET';
	public PUT_METHOD: string = 'PUT';
	public POST_METHOD: string = 'POST';

	private cache: any;

	constructor(public http: Http) {
		this.cache = {};
	}

	private buildRequestOptions(method: string, options?: RequestOptions): RequestOptions {
		let resultOptions = options ? options : new RequestOptions();
		let headers = resultOptions.headers ? resultOptions.headers : new Headers();
		if (this.PUT_METHOD === method || this.POST_METHOD) {
			headers.append('Content-Type', 'application/json');
		}
		headers.append('Authorization', (localStorage.getItem('ls.JWT') || '').replace(/['"]+/g, ''));
		resultOptions.headers = headers;
		return resultOptions;
	}

	private static getCacheKey(url: string, method: string, data?: Object, options?: RequestOptions) {
		let key: string = url + method + JSON.stringify(data);

		if (options !== undefined && options.params !== undefined) {
			key += `?${options.params.toString()}`;
		}

		return key;
	}

	clearCache(key: string) {
		delete this.cache[key];
	}

	request(url: string, method: string, data?: Object, reloadCache?: boolean, options?: RequestOptions) {
		const key = HttpClient.getCacheKey(url, method, data, options);

		if (reloadCache) {
			this.clearCache(key);
		}

		if (!this.cache[key]) {
			let requestOptions: RequestOptions = this.buildRequestOptions(method, options);
			switch (method) {
				case this.GET_METHOD :
					this.cache[key] = this.get(url, options);
					break;
				case this.POST_METHOD :
					this.cache[key] = this.post(url, data, options);
					break;
				case this.PUT_METHOD :
					this.cache[key] = this.put(url, data, options);
					break;
			}
		}

		return this.cache[key];
	}

	get(url: string, options: RequestOptions) {
		return this.http.get(url, options).publishReplay(1).refCount();
	}

	post(url: string, data: Object, options?: RequestOptions) {
		return this.http.post(url, data, options).publishReplay(1).refCount();
	}

	put(url: string, data: Object, options?: RequestOptions) {
		return this.http.put(url, data, options).publishReplay(1).refCount();
	}
}