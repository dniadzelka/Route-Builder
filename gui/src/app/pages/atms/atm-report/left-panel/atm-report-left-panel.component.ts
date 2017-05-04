import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
	selector: 'atm-report-left-panel',
	templateUrl: './atm-report-left-panel.component.html',
	styleUrls: ['./atm-report-left-panel.component.scss'],
	providers: []
})

export class AtmReportLeftPanelComponent {
	state = <any>{};
	DEFAULT_DATE_FROM = new Date('2017-01-01');
	DEFAULT_DATE_TO = new Date();

	constructor(private router: Router) {
		this.init();
	}

	init() {
		this.state.dateFrom = this.DEFAULT_DATE_FROM;
		this.state.dateTo = this.DEFAULT_DATE_TO;
	}

	reset() {
		this.init();
	}

	apply() {
		//TODO: handle apply action
	}

	backToATMs() {
		this.router.navigate(['/atms']);
	}
}