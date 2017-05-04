import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule, ModuleWithProviders} from "@angular/core";
import {DatepickerModule} from "angular2-material-datepicker";
import {DatePickerComponent} from "./date-picker.component";

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		DatepickerModule
	],
	exports: [DatePickerComponent],
	declarations: [DatePickerComponent]
})

export class DatePickerModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: DatePickerModule,
			providers: []
		};
	}
}