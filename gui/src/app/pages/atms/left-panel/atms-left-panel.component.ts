import {Component} from "@angular/core";

@Component({
	selector: 'atms-left-panel',
	templateUrl: './atms-left-panel.component.html',
	styleUrls: ['./atms-left-panel.component.scss'],
	providers: []
})

export class AtmsLeftPanelComponent {
	state = {};
	statuses = [
		{value: 'REGULAR', viewValue: 'Regular'},
		{value: 'QUEUE', viewValue: 'In Queue'},
		{value: 'PROCESSING', viewValue: 'Processing'},
		{value: 'DELIVERY', viewValue: 'Delivery'}
	];

	constructor() {}
}