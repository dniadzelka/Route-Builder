import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
	selector: 'atms',
	templateUrl: './atms.component.html',
	styleUrls: ['./atms.component.scss'],
	providers: []
})

export class AtmsComponent {
	public iterateKeys: Array<string> = ['name', 'address'];
	public data: Array<any> = [
		{
			id: '1',
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		},
		{
			id: '2',
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		},
		{
			id: '3',
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		},
		{
			id: '4',
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		},
		{
			id: '5',
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		},
		{
			id: '6',
			name: 'ATM #1',
			address: 'Majakouskaga 43'
		}
	];

	constructor(private router: Router) {}

	goToATMReport(id): void {
		this.router.navigate(['/atms', id]);
	}
}