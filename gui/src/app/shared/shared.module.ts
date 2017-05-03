import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {
	MdProgressSpinnerModule,
	MdSelectModule,
	MdButtonToggleModule,
	MdInputModule,
	MdSidenavModule,
	MdProgressBarModule,
	MdListModule,
	MdIconModule,
	MdDialogModule,
	MdCheckboxModule,
	MdButtonModule,
	MdAutocompleteModule,
	MdToolbarModule,
	MdCardModule,
	MdMenuModule,
	MdSnackBarModule
} from "@angular/material";

import {NgModule, ModuleWithProviders} from "@angular/core";
import {IterateObjectPipe} from "./pipes/iterate-object.pipe";
import {ConfirmationModalModule} from "./components/confirmation-modal/confirmation-modal.module";

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MdProgressSpinnerModule,
		MdSelectModule,
		MdButtonToggleModule,
		MdInputModule,
		MdSidenavModule,
		MdProgressBarModule,
		MdListModule,
		MdIconModule,
		MdDialogModule,
		MdCheckboxModule,
		MdButtonModule,
		MdAutocompleteModule,
		MdToolbarModule,
		MdCardModule,
		MdMenuModule,
		MdSnackBarModule,
		ConfirmationModalModule
	],
	declarations: [IterateObjectPipe],
	exports: [
		CommonModule,
		FormsModule,
		MdProgressSpinnerModule,
		MdSelectModule,
		MdButtonToggleModule,
		MdInputModule,
		MdSidenavModule,
		MdProgressBarModule,
		MdListModule,
		MdIconModule,
		MdDialogModule,
		MdCheckboxModule,
		MdButtonModule,
		MdAutocompleteModule,
		MdToolbarModule,
		MdCardModule,
		MdMenuModule,
		MdSnackBarModule,
		IterateObjectPipe,
		ConfirmationModalModule
	]
})

export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: []
		};
	}
}
