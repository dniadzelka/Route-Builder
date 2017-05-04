import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
	selector: 'atm-report-left-panel',
	templateUrl: './atm-report-left-panel.component.html',
	styleUrls: ['./atm-report-left-panel.component.scss'],
	providers: []
})

export class AtmReportLeftPanelComponent {
	constructor(private router: Router) {}

	backToATMs() {
		this.router.navigate(['/atms']);
	}
}