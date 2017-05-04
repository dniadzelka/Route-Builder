import {Component} from "@angular/core";

@Component({
	selector: 'atms-left-panel',
	templateUrl: './atms-left-panel.component.html',
	styleUrls: ['./atms-left-panel.component.scss'],
	providers: []
})

export class AtmsLeftPanelComponent {
	state = <any>{};
	statuses = [
		{value: 'ALL', viewValue: 'All Statuses'},
		{value: 'REGULAR', viewValue: 'Regular'},
		{value: 'QUEUE', viewValue: 'In Queue'},
		{value: 'PROCESSING', viewValue: 'Processing'},
		{value: 'DELIVERY', viewValue: 'Delivery'}
	];

	constructor() {
		this.init();
	}

	init() {
		this.state.status = 'ALL';
		this.state.from = 0;
		this.state.to = 50;
	}

	reset() {
		this.init();
	}

	apply() {
		//TODO: handle apply action
	}
}