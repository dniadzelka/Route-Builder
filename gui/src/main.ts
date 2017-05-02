import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './app/app.module';
import {ApiConfig} from "./app/shared/api/api.config";

require('./scss/main.scss');

if (process.env.ENV === 'production') {
	enableProdMode();
}

$.when($.getJSON('../config/api.context.json'),
	$.getJSON('../config/api.settings.json'))
	.done((_context: any, _settings: any) => {
		ApiConfig.getInstance().initialize(_context[0], _settings[0]);
		platformBrowserDynamic().bootstrapModule(AppModule);
	})
	.fail((_error: any) => {
		console.error("Can't load api settings files\n");
		console.error(_error);
	});