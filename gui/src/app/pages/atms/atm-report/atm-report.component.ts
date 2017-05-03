import {Component} from "@angular/core";

@Component({
	selector: 'atm-report',
	templateUrl: './atm-report.component.html',
	styleUrls: ['./atm-report.component.scss'],
	providers: []
})

export class AtmReportComponent {
	multi;

	constructor() {
		this.multi = [
			{
				"name": "US Dollar",
				"series": [
					{
						"name": "10.05.2017",
						"value": 100
					},
					{
						"name": "15.05.2017",
						"value": 87
					},
					{
						"name": "20.05.2017",
						"value": 54
					},
					{
						"name": "25.05.2017",
						"value": 44
					},
					{
						"name": "30.05.2017",
						"value": 30
					},
				]
			},

			{
				"name": "Euro",
				"series": [
					{
						"name": "10.05.2017",
						"value": 100
					},
					{
						"name": "15.05.2017",
						"value": 92
					},
					{
						"name": "20.05.2017",
						"value": 87
					},
					{
						"name": "25.05.2017",
						"value": 85
					},
					{
						"name": "30.05.2017",
						"value": 83
					},
				]
			},

			{
				"name": "Ruble",
				"series": [
					{
						"name": "10.05.2017",
						"value": 100
					},
					{
						"name": "15.05.2017",
						"value": 88
					},
					{
						"name": "20.05.2017",
						"value": 85
					},
					{
						"name": "25.05.2017",
						"value": 83
					},
					{
						"name": "30.05.2017",
						"value": 79
					},
				]
			}
		];
	}

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = false;
	showXAxisLabel = true;
	// xAxisLabel = 'Country';
	showYAxisLabel = true;
	// yAxisLabel = 'Population';

	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	// line, area
	autoScale = true;

	onSelect(event) {
		console.log(event);
	}
}