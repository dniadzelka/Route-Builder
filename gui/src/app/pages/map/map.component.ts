import {Component} from "@angular/core";

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable?: boolean;
}

@Component({
	selector: 'map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	providers: []
})

export class MapComponent {
	zoom: number = 12;
	lat: number = 53.904540;
	lng: number = 27.561524;
	markers: marker[] = [
		{
			lat: 51.673858,
			lng: 7.815982,
			label: 'A',
			draggable: false
		},
		{
			lat: 51.373858,
			lng: 7.215982,
			label: 'B',
			draggable: false
		},
		{
			lat: 51.723858,
			lng: 7.895982,
			label: 'C',
			draggable: false
		}
	];

	constructor() {
	}

	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`)
	}

	mapClicked(event) {
		this.markers.push({
			lat: event.coords.lat,
			lng: event.coords.lng
		});
	}
}