import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {
	static getStatuses() {
		return [
			{value: '', viewValue: 'All Statuses'},
			{value: 'REGULAR', viewValue: 'Regular'},
			{value: 'QUEUE', viewValue: 'In Queue'},
			{value: 'PROCESSING', viewValue: 'Processing'},
			{value: 'DELIVERY', viewValue: 'Delivery'}
		];
	}

	static getCurrencies() {
		return [
			{value: 'BLN', viewValue: 'Belarussian Rubles'},
			{value: 'EUR', viewValue: 'Euro'},
			{value: 'USD', viewValue: 'Ameriacan Dollars'}
		];
	}

	static getStatisticPeriods() {
		return [
			{value: 'LAST1', viewValue: 'Last month'},
			{value: 'LAST3', viewValue: 'Lats quarter'},
			{value: 'LAST6', viewValue: 'Last 6 months'},
			{value: 'LAST12', viewValue: 'Last year'}
		];
	}

	static getGranularities() {
		return [
			{value: 'WEEK', viewValue: 'Week'},
			{value: 'MONTH', viewValue: 'Month'},
			{value: 'QUARTER', viewValue: 'Quarter'}
		];
	}

	static getMinskAreas() {
		return [
			{
				value: '',
				viewValue: 'All Areas'
			},
			{
				value: '1',
				viewValue: 'Zavodskoy'
			},
			{
				value: '2',
				viewValue: 'Leninskiy'
			},
			{
				value: '3',
				viewValue: 'Moskovskiy'
			},
			{
				value: '4',
				viewValue: "Oktyabr'skiy"
			},
			{
				value: '5',
				viewValue: 'Partizanskiy'
			},
			{
				value: '6',
				viewValue: 'Pervomayskiy'
			},
			{
				value: '7',
				viewValue: 'Sovetskiy'
			},
			{
				value: '8',
				viewValue: 'Frunzenskiy'
			},
			{
				value: '9',
				viewValue: "Tsentral'nyy"
			},
			{
				value: '10',
				viewValue: 'Other'
			}
		];
	}
}