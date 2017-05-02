import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AtmsRoutes} from "../atms.routes";
import {AtmReportComponent} from "./atm-report.component";

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(AtmsRoutes)
	],
	declarations: [
		AtmReportComponent
	],
	entryComponents: [],
	exports: [
		AtmReportComponent
	]
})

export class AtmReportModule {
}
