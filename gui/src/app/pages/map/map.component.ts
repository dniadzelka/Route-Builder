import {Component} from "@angular/core";


@Component({
	selector: 'map',
	templateUrl: 'map.component.html',
	styleUrls: ['map.component.scss'],
	providers: []
})

export class MapComponent {
	lat: number = 53.904540;
	lng: number = 27.561524;
	zoom: number = 12;

	constructor() {
	}
}