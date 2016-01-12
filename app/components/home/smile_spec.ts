import {
	describe,
	expect,
	it,
} from 'angular2/testing';
import {Smile} from './smile';

export function main() {
	describe('valuesMatch', function () {
		it('should return true if the values match', function () {
			const smile = new Smile();
			smile.setEs5Values([1, 2, 3]);
			smile.setEs6Values([1, 2, 3]);
			expect(smile.valuesMatch()).toBe(true);
		});

		it('should return false if the values do not match', function () {
			const smile = new Smile();
			smile.setEs5Values([1, 2, 4]);
			smile.setEs6Values([1, 2, 3]);
			expect(smile.valuesMatch()).toBe(false);
		});

		it('should return false if the arrays are different lengths', function () {
			const smile = new Smile();
			smile.setEs5Values([1, 2, 3]);
			smile.setEs6Values([1, 2, 3, 4]);
			expect(smile.valuesMatch()).toBe(false);
		});
	});
}
