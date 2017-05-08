import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AtmsComponent} from "./atms.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AtmsRoutes} from "./atms.routes";
import {AtmsLeftPanelComponent} from "./left-panel/atms-left-panel.component";
import {RulesModalComponent} from "./rules-modal/rules-modal.component";

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(AtmsRoutes)
	],
	declarations: [
		AtmsComponent,
		AtmsLeftPanelComponent,
		RulesModalComponent
	],
	entryComponents: [RulesModalComponent],
	exports: [
		AtmsComponent,
		AtmsLeftPanelComponent
	]
})

export class AtmsModule {
}
