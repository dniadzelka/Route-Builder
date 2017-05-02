import {Component} from "@angular/core";

@Component({
	selector: 'atms',
	templateUrl: './atms.component.html',
	styleUrls: ['./atms.component.scss'],
	providers: []
})

export class AtmsComponent {
	public data: Array<any> = [
		{
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		},
		{
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		},
		{
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		},
		{
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		},
		{
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		},
		{
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		}
	];

	constructor() {
	}
}