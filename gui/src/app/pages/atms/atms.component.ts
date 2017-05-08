import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {RestService} from "../../shared/api/rest.service";

@Component({
	selector: 'atms',
	templateUrl: './atms.component.html',
	styleUrls: ['./atms.component.scss'],
	providers: [RestService]
})

export class AtmsComponent {
	loading: boolean;
	public iterateKeys: Array<string> = ['name', 'address'];
	public atmTable: Array<any> = [];

	constructor(private router: Router, private restService: RestService) {
		this.initTable();
	}

	initTable() {
		this.loading = true;
		this.restService.getATMs().subscribe((data) => {
			data.map((item) => {
				item.checked = false;
				return item;
			});

			this.loading = false;
			this.atmTable = data;
		});
	}

	goToATMReport(id): void {
		this.router.navigate(['/atms', id]);
	}
}