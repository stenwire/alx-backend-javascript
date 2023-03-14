const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('Calculate Number', function () {
	it('should calulate sum when a is round up', function () {
		expect(calculateNumber('SUM', 2.7, 3)).to.equal(6);
	});
	it('should calulate sum when b is round up', function () {
		expect(calculateNumber('SUM', 1, 2.5)).to.equal(4);
	});
	it('should calulate difference when a is round up', function () {
		expect(calculateNumber('SUBTRACT', 1.6, 5)).to.equal(-3);
	});
	it('should calulate difference when b is round up', function () {
		expect(calculateNumber('SUBTRACT', -3, 6.7)).to.equal(-10);
	});
	it('should calulate division when a is round up', function () {
		expect(calculateNumber('DIVIDE', 7.6, 4.3)).to.equal(2);
	});
	it('should calulate division when b is round up', function () {
		expect(calculateNumber('DIVIDE', 4, 1.9)).to.equal(2);
	});
	it('should return error when b is 0', function () {
		expect(calculateNumber('DIVIDE', 4, 0.3)).to.equal('Error');
	});
	it('should check type of return value when b is 0', function () {
		expect(calculateNumber('DIVIDE', 2, 0)).to.be.a('string')
	});
	it('should return a value if b is round up', function () {
		expect(calculateNumber('DIVIDE', 4, 0.5)).to.equal(4);
	});
});
