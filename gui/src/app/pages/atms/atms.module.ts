import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AtmsComponent} from "./atms.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AtmsRoutes} from "./atms.routes";

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(AtmsRoutes)
	],
	declarations: [
		AtmsComponent
	],
	entryComponents: [],
	exports: [
		AtmsComponent
	]
})

export class AtmsModule {
}
