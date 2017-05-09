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
	public iterateKeys: Array<string> = ['name', 'address', 'area', 'status', 'amount', 'currencies'];
	public atmTable: Array<any> = [];

	constructor(private router: Router, private restService: RestService, private atmsService: AtmsService) {
		this.initTable();
	}

	initTable() {
		this.loading = true;
		this.restService.getATMsTable().subscribe((data) => {
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

	print(printSectionId: string): void {
		let popupWinindow;
		let innerContents = document.getElementById(printSectionId).innerHTML;
		popupWinindow = window.open('', '_blank', 'height=' + screen.height + ',width=' + screen.width);
		popupWinindow.document.open();
		popupWinindow.document.write(`
			  <html>
					<head>
						<title>Print Report</title>
						 <style>
						    @media print{
						        @page {size: landscape}
						            table {width: 100%; border-collapse: collapse;}
						            tr { height: 40px; }
						            th, td { border: grey; text-align: center; vertical-align: middle; }
						            tr:nth-child(even) { background-color: lightgrey; -webkit-print-color-adjust: exact; }        
						    }				
						 </style>
					</head>
					<body onload="window.print();window.close()">${innerContents}</body>
			  </html>`);
		popupWinindow.document.close();
	}
}