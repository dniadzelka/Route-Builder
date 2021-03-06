import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AtmsRoutes} from "../atms.routes";
import {AtmReportComponent} from "./atm-report.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {AtmReportLeftPanelComponent} from "./left-panel/atm-report-left-panel.component";

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		NgxChartsModule,
		RouterModule.forChild(AtmsRoutes)
	],
	declarations: [
		AtmReportComponent,
		AtmReportLeftPanelComponent
	],
	entryComponents: [],
	exports: [
		AtmReportComponent,
		AtmReportLeftPanelComponent
	]
})

export class AtmReportModule {
}
