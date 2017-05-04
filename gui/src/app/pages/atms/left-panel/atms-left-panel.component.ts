import {Component} from "@angular/core";
import {CommonService} from "../../../shared/services/common.service";

@Component({
	selector: 'atms-left-panel',
	templateUrl: './atms-left-panel.component.html',
	styleUrls: ['./atms-left-panel.component.scss'],
	providers: [CommonService]
})

export class AtmsLeftPanelComponent {
	state = <any>{};
	statuses = CommonService.getStatuses();
	areas = CommonService.getMinskAreas();

	constructor() {
		this.init();
	}

	init() {
		this.state.area = '';
		this.state.status = '';
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