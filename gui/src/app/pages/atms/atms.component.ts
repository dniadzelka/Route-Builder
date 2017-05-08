import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {RestService} from "../../shared/api/rest.service";
import {AtmsService} from "./atms.service";
import {PopUpService} from "../../shared/services/pop-up-service";

@Component({
	selector: 'atms',
	templateUrl: './atms.component.html',
	styleUrls: ['./atms.component.scss'],
	providers: [RestService, AtmsService, PopUpService]
})

export class AtmsComponent {
	loading: boolean;
	public iterateKeys: Array<string> = ['name', 'address'];
	public atmTable: Array<any> = [];

	constructor(private router: Router, private restService: RestService, private atmsService: AtmsService) {
		this.initTable();
	}

	initTable() {
		this.loading = true;
		this.restService.getATMs().subscribe((data) => {
			this.loading = false;
			this.atmTable = data;
		});
	}

	goToATMReport(id): void {
		this.router.navigate(['/atms', id]);
	}

	isRulesAvailable(): boolean {
		let hasChecked: boolean = false;
		this.atmTable.forEach(item => {
			if (item.checked) {
				hasChecked = true;
			}
		});

		return hasChecked;
	}

	openRulesModal(): void {
		this.atmsService.openRulesModal({}).subscribe((data) => {
			if (data) {

			}
		});
	}

	print(): void {
		window.print();
	}
}