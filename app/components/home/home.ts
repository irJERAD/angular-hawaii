import {Component} from 'angular2/core';
import {Smile} from './smile';

@Component({
	selector: 'home',
	templateUrl: './components/home/home.html',
	styleUrls: ['./components/home/home.css'],
	directives: [Smile]
})

export class HomeCmp {
	protected es5Destructuring:number;
	protected es6Destructuring:number;
	protected es5Spread:number;
	protected es6Spread:number;
	protected es5Default:number;
	protected es6Default:number;

	public es5Values:Array<number>;
	public es6Values:Array<number>;

	/**
	 * Tasks 1 - 3. When you're done, the main page of the site should display the same value in all cells of the table
	 * The code to change is all commented out to start with. Uncomment it and let the compiler help you find the solution!
	 */
	constructor() {
		const mainList:Array<number> = [8, 2, 3];

		this.es5Destructuring = mainList[0] + mainList[1] + mainList[2];

		// TASK #1
		// ES6 added support for destructured assignment. Write a one liner to assign the values of mainList
		// to 3 vars named 'one', 'two', and 'three';
		// This should help: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

		//var ...[FINISH ME]

		//this.es6Destructuring = one + two + three; // uncomment this after these vars are declared and assigned to complete

		// TASK # 2
		// Pass an array to a function with named parameters using the new spread operator
		// This should help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
		function addNums(x, y, z):number {
			return x + y + z;
		}

		this.es5Spread = addNums.apply(null, mainList);
		//this.es6Spread = addNums(/* FINISH ME */);

		// TASK # 3
		// Declare a function that defines a default parameter
		// This should help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
		var es5Nums:Array<number> = [8, 2];

		function addNumsDefaultEs5(x, y, z):number {
			return x + y + (z || 5); //The old way, without default parameters
		}

		this.es5Default = addNumsDefaultEs5(es5Nums[0], es5Nums[1], null);

		// Fix this function to behave the same as addNumsDefaultEs5 by declaring a default parameter value for z
		//function addNumsDefaultEs6(x, y, z):number {
		//	return x + y + z;
		//}

		//this.es6Default = addNumsDefaultEs6(...es5Nums);


		this.es5Values = [this.es5Destructuring, this.es5Spread, this.es5Default];
		this.es6Values = [this.es6Destructuring, this.es6Spread, this.es6Default];
	}
}
