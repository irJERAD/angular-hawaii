import {Component} from 'angular2/core';
import {NgIf} from 'angular2/common';
@Component({
	selector: 'smile, [smile]',
	templateUrl: './components/home/smile.html',
	styleUrls: ['./components/home/smile.css'],
	inputs: ['es5Values', 'es6Values'],
	directives: [NgIf]
})

export class Smile {
	protected message;
	protected es5Values:Array<number>;
	protected es6Values:Array<number>;

	constructor() {
		this.message = 'Nice Job!';
	}

	valuesMatch() {
		var that = this;

		return this.es5Values.reduce(function (acc, es5Val, i) {
			//Bonus points: implement this without having to context switch.
			return acc && es5Val === that.es6Values[i];
		}, true);
	}

	setEs5Values(vals) {
		this.es5Values = vals;
	}

	setEs6Values(vals) {
		this.es6Values = vals;
	}
}
