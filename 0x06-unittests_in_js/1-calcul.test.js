const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('Calculate Number', function () {
	it('should calulate sum when a is round up', function () {
		assert.equal(calculateNumber('SUM', 2.7, 3), 6);
	});
	it('should calulate sum when b is round up', function () {
		assert.equal(calculateNumber('SUM', 1, 2.5), 4);
	});
	it('should calulate difference when a is round up', function () {
		assert.equal(calculateNumber('SUBTRACT', 1.6, 5), -3);
	});
	it('should calulate difference when b is round up', function () {
		assert.equal(calculateNumber('SUBTRACT', -3, 6.7), -10);
	});
	it('should calulate division when a is round up', function () {
		assert.equal(calculateNumber('DIVIDE', 7.6, 4.3), 2);
	});
	it('should calulate division when b is round up', function () {
		assert.equal(calculateNumber('DIVIDE', 4, 1.9), 2);
	});
	it('should return error when b is 0', function () {
		assert.equal(calculateNumber('DIVIDE', 4, 0.3), 'Error');
	});
	it('should return a value if b is round up', function () {
		assert.equal(calculateNumber('DIVIDE', 4, 0.5), 4);
	});
});
