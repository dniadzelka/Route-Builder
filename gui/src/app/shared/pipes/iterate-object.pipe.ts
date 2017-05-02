import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'iterateObject'})

export class IterateObjectPipe implements PipeTransform {
	transform(value, keys): any {
		let result = [];

		keys.forEach(key => {
			result.push(value[key]);
		});

		return result;
	}
}