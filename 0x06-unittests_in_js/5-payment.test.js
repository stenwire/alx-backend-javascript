const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');


describe('sendPaymentRequestToApi', function () {
	const sandbox =  sinon.createSandbox()

	beforeEach(function () {
		sandbox.spy(console, 'log')
	});

	afterEach(function () {
		sandbox.restore()
	});

	it('verifies console logs 120 as total', function () {
		sendPaymentRequestToApi(100, 20);
		expect(console.log.calledWith('The total is: 120')).to.be.true
		expect(console.log.calledOnce).to.be.true;
	});
	it('verifies console logs 20 as total', function () {
		sendPaymentRequestToApi(10, 10);
		expect(console.log.calledWith('The total is: 20')).to.be.true
		expect(console.log.calledOnce).to.be.true;
	});
})
