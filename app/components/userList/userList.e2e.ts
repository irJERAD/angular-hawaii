describe('User List', function () {

	beforeEach(function () {
		browser.get('/dist/dev/#/userList');
	});

	it('should send a request to server', function () {
		$('.complete-form input').sendKeys(browser.params.fullname);
		$('.complete-form button').click();
	});
});
