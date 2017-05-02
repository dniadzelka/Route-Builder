export class ApiConfig {

	private api_settings: any;
	private api_context: any;

	private static _instance: ApiConfig = new ApiConfig();

	constructor() {
		if (ApiConfig._instance) {
			throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
		}
		ApiConfig._instance = this;
	}

	public static getInstance(): ApiConfig {
		return ApiConfig._instance;
	}

	public initialize(_context: any, _settings: any): void {
		this.api_settings = _settings;
		this.api_context = _context;
		this.prepareApiSettings();
	}

	private prepareApiSettings(): void {
		for (let i = 0; i < this.api_settings.api.length; i++) {
			this.prepareApiContextProperty(this.api_settings.api[i], 'hostname');
			this.prepareApiContextProperty(this.api_settings.api[i], 'port');
			this.prepareApiContextProperty(this.api_settings.api[i], 'prefix');
			this.prepareApiContextProperty(this.api_settings.api[i], 'protocol');
		}
	}

	private prepareApiContextProperty(apiItem: any, propertyName: any): void {
		for (let key in this.api_context[propertyName]) {
			if (this.api_context[propertyName].hasOwnProperty(key)) {
				apiItem[propertyName] = apiItem[propertyName].replace('{{' + key + '}}', this.api_context[propertyName][key]);
			}
		}
	}

	public getEndpointUrl(_endpoint_name: string, _method: string, _data: any): string {
		if (!this.api_settings || !this.api_settings.api) {
			console.error('Api settings not found');
			return;
		}
		for (let i = 0; i < this.api_settings.api.length; i++) {
			let context = this.api_settings.api[i];
			let endpoints = context.endpoints;
			if (endpoints && endpoints.length > 0) {
				var endpointSettings = endpoints.filter((_endpoint: any) => {
					return _endpoint.name.toLowerCase() === _endpoint_name.toLowerCase() && _endpoint.method.toLowerCase() === _method.toLowerCase();
				})[0];
				if (endpointSettings) {
					let prefix = context.prefix && context.prefix.length > 0 ? context.prefix + '/' : '';
					let endpoint = _method === 'GET' ? ApiConfig.formatEndpoint(endpointSettings.endpoint, _data) : endpointSettings.endpoint;
					return context.protocol + '://' + context.hostname + ':' + context.port + '/' + prefix + endpoint;
				}
			}
		}

		console.error('Api settings not found for endpoint: ' + _endpoint_name);
		return;
	}

	private static formatEndpoint(_endpoint: any, _data: any) {
		let formattedEndpoint = String(_endpoint);
		for (let propertyName in _data) {
			if (_data.hasOwnProperty(propertyName)) {
				formattedEndpoint = formattedEndpoint.replace('{{' + propertyName + '}}', _data[propertyName]);
			}
		}
		return formattedEndpoint;
	}
}