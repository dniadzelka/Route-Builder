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
						"name": "01.05.2017",
						"value": 60
					},
					{
						"name": "02.05.2017",
						"value": 59
					},
					{
						"name": "03.05.2017",
						"value": 57
					},
					{
						"name": "04.05.2017",
						"value": 56
					},
					{
						"name": "05.05.2017",
						"value": 55
					},
					{
						"name": "06.05.2017",
						"value": 55
					},
					{
						"name": "07.05.2017",
						"value": 27
					},
					{
						"name": "08.05.2017",
						"value": 19
					},
					{
						"name": "09.05.2017",
						"value": 17
					},
					{
						"name": "10.05.2017",
						"value": 15
					}
				]
			},

			{
				"name": "Euro",
				"series": [
					{
						"name": "01.05.2017",
						"value": 20
					},
					{
						"name": "02.05.2017",
						"value": 20
					},
					{
						"name": "03.05.2017",
						"value": 20
					},
					{
						"name": "04.05.2017",
						"value": 19
					},
					{
						"name": "05.05.2017",
						"value": 19
					},
					{
						"name": "06.05.2017",
						"value": 19
					},
					{
						"name": "07.05.2017",
						"value": 12
					},
					{
						"name": "08.05.2017",
						"value": 8
					},
					{
						"name": "09.05.2017",
						"value": 8
					},
					{
						"name": "10.05.2017",
						"value": 7
					}
				]
			},

			{
				"name": "Ruble",
				"series": [
					{
						"name": "01.05.2017",
						"value": 20
					},
					{
						"name": "02.05.2017",
						"value": 18
					},
					{
						"name": "03.05.2017",
						"value": 17
					},
					{
						"name": "04.05.2017",
						"value": 16
					},
					{
						"name": "05.05.2017",
						"value": 16
					},
					{
						"name": "06.05.2017",
						"value": 16
					},
					{
						"name": "07.05.2017",
						"value": 4
					},
					{
						"name": "08.05.2017",
						"value": 2
					},
					{
						"name": "09.05.2017",
						"value": 0
					},
					{
						"name": "10.05.2017",
						"value": 0
					}
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