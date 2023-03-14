const sinon = require('sinon');
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
	it ('Testing the result of the getPaymentTokenFromAPI asyn function', function() {
		return getPaymentTokenFromAPI(true).then(data => {
			expect(data.data).to.equal('Successful response from the API')
		})
	});
});
