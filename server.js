var beaconSpecification = process.env.BEACON;
if (beaconSpecification) {
	if (beaconSpecification.toLowerCase() === 'ibeacon') {
		console.log('hello iBeacon!');
		require('./app/ibeacon');
	} else {
		console.log('hello Eddystone!');
		require('./app/eddystone');
	}
} else {
	console.log('hello Eddystone std!');
	require('./app/eddystone');
}