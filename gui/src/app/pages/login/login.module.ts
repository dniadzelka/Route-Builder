import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {LoginRoutes} from "./login.routes";
import {LoginComponent} from "./login.component";


@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(LoginRoutes)
	],
	declarations: [
		LoginComponent
	],
	entryComponents: [],
	exports: [
		LoginComponent
	]
})

export class LoginModule {
}
