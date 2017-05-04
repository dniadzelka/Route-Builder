//https://github.com/koleary94/Angular-2-Datepicker

import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
	selector: 'date-picker',
	templateUrl: './date-picker.component.html',
	styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent {
	private selectedDate: Date;

	@Input() placeholder: string;
	@Output() dateChange: EventEmitter<any> = new EventEmitter<any>();

	@Input()
	get date() {
		return this.selectedDate;
	}

	set date(date) {
		this.selectedDate = date;
		this.dateChange.emit(this.selectedDate);
	}
}