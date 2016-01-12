import {
	TestComponentBuilder,
	describe,
	expect,
	injectAsync,
	it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {HomeCmp} from './home';

export function main() {
	describe('Home component', () => {
		it('should be able to load the page',
			injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
				return tcb.createAsync(TestComponent).then((rootTC) => {
					let homeDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;

					expect(DOM.querySelectorAll(homeDOMEl, 'h1')[0].textContent).toEqual('Angular 1');
				});
			}));
	});
}

@Component({
	selector: 'test-cmp',
	directives: [HomeCmp, HomeCmp],
	template: '<div><home></home></div>'
})
class TestComponent {
}
