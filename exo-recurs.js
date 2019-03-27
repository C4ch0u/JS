let randomNumber = (min = 1, max = 30) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nouvelEtage = (depth, etage) => {
	let tab = [`Etage ${depth}`];
	tab.push(etage);
	if (depth > 0) {
		depth--;
		return nouvelEtage(depth, tab);
	} else {
		return tab;
	}
}

let dernierEtage = ['Dernier étage, regardez cette vue !! On redescends.'];
let nombreEtages = randomNumber();
let etageImmeuble = nouvelEtage(nombreEtages, dernierEtage);

console.log(`Nombre d'étages : `, nombreEtages + 1);
console.log(etageImmeuble);

let ascenseur = function (etage = etageImmeuble[1]) {

	if (etage[1] !== undefined) {
		console.log(etage[0]);
		etage = etage[1];
		ascenseur(etage)

	} else {
		console.log(dernierEtage[0]);
	}
};

ascenseur();
/*let countDown = function (timer = 30) {
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
*/
