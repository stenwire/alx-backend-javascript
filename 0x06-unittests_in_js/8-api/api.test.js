const request = require('request');
const expect = require('chai').expect;

describe('For index page of local server', function() {
	it('should test for correct status code', function(done) {
		request.get('http://localhost:7865/', (err, res, body) => {
			expect(res.statusCode).to.equal(200);
			done();
		});

	});
	it('should test for correct body', function(done) {
		request.get('http://localhost:7865/', (err, res, body) => {
			expect(body).to.equal('Welcome to the payment system');
			done();
		});
	});
	it ('should return 404 if wrong url', function(done) {
		request.get('http://localhost:7865/test', (err, res, body) => {
			expect(res.statusCode).to.equal(404);
			done();
		})
	})
});
