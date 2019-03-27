let countDown = function (timer = 30) {
	if (timer > 0) {
		console.log(`${timer}s`);
		timer--;
		countDown(timer);
	} else {
		console.log('Boum !')
	}
};
console.log(`Ce message s'autodétruira dans :`);
countDown();
