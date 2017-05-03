import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule, ModuleWithProviders} from "@angular/core";
import {MdDialogModule, MdButtonModule} from "@angular/material";
import {ConfirmationModalComponent} from "./confirmation-modal.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MdDialogModule,
		MdButtonModule
	],
	exports: [ConfirmationModalComponent],
	declarations: [ConfirmationModalComponent],
})

export class ConfirmationModalModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ConfirmationModalModule,
			providers: []
		};
	}
}
