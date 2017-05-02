import {NgModule, ApplicationRef} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MapComponent} from "./map.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MapRoutes} from "./map.routes";
import {AgmCoreModule} from "angular2-google-maps/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		BrowserModule,
		RouterModule.forChild(MapRoutes),
		AgmCoreModule.forRoot({
			// &callback=initMap
			apiKey: 'AIzaSyCq0OuJ9aGxYL8cQhGYcwimc84uZHiks84'
		})
	],
	declarations: [
		MapComponent
	],
	entryComponents: [],
	exports: [
		MapComponent
	]
})

export class ReferencesModule {
}
