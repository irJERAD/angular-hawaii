describe('Home', function () {

	beforeEach(function () {
		browser.get('/dist/dev');
	});

	it('should have correct h1', function () {
		expect(element(by.css('app section home h1')).getText()).toEqual('Angular 2');
	});

	it('should have a value for destructuring', function () {
		expect(element(by.css('.destructuring')).getText()).toEqual('13');
	});

	it('should have a value for spread', function () {
		expect(element(by.css('.spread')).getText()).toEqual('13');
	});

	it('should have a value for default', function () {
		expect(element(by.css('.default')).getText()).toEqual('15');
	});

	it('should see a smiley', function () {
		expect(element(by.css('.smile')).isPresent()).toEqual(true);
	});

	it('should see a message next to the smiley', function () {
		expect(element(by.css('.message')).getText()).toEqual('Nice Job!');
	});
});
