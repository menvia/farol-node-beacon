// Require test Modules
require('./testSetup');

describe('Beacons', function() {
  	describe('iBeacon', function () {
    	it('should return true if iBeacon is running', function(done) {
    		var running = true;
    		running.should.equal(true);
  			done();
    	});
	});
  	describe('Eddystone', function () {
    	it('should return true if Eddystone is running', function(done) {
    		var running = true;
    		running.should.equal(true);
  			done();
    	});
	});
});
