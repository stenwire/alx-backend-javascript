const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function (){
	it ('test if calculateNumber is called from sendPaymentRequestToApi', function(){
		const spy = sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(100, 20);
		expect(spy.calledOnce).to.be.true;
		expect(spy.calledWithMatch('SUM')).to.be.true;
		spy.restore();
	})

	it ('test if sendPaymentRequestToApi calculates total correctly', function() {
		const spy = sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(100, 20);
		expect(spy.returnValues[0]).to.equal(120);
		spy.restore();
	});

	it ('test if sendPaymentRequestToApi calculates total correctly with a rounded up', function() {
		const spy = sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(10.5, 20);
		expect(spy.returnValues[0]).to.equal(31);
		spy.restore();
	});

	it ('test if sendPaymentRequestToApi calculates total correctly with b rounded up', function() {
		const spy = sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(10, 18.5);
		expect(spy.returnValues[0]).to.equal(29);
		spy.restore();
	});

	it ('test if sendPaymentRequestToApi calculates total correctly with a rounded up', function() {
		const spy = sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(10.5, -20);
		expect(spy.returnValues[0]).to.equal(-9);
		spy.restore();
	});
});
