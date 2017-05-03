import {Component} from "@angular/core";
import {MapBindingsService} from "../map-binfings.service";

@Component({
	selector: 'map-left-panel',
	templateUrl: './map-left-panel.component.html',
	styleUrls: ['./map-left-panel.component.scss'],
	providers: [MapBindingsService]
})

export class MapLeftPanelComponent {
	constructor() {}

	addATM(): void {
		MapBindingsService.applyLeftPanelState({
			addATM: true
		});
	}
}