const ALTITUDE_MONTAGNE = [
	1235,
	1034,
	1045,
	1354,
	2254,
	2145,
	1987,
	1649,
	3000
];
let deltaMax = ALTITUDE_MONTAGNE[0];
let deltaMin = ALTITUDE_MONTAGNE[0];
for (altitude of ALTITUDE_MONTAGNE) {
	deltaMax -= altitude;
	deltaMin -= altitude;
	if (deltaMax <= 0) {
		deltaMax = altitude;
	} else {
		deltaMax += altitude;
	}
	if (deltaMin <= 0) {
		deltaMin += altitude;
	} else {
		deltaMin = altitude;
	}
}

console.log(`l'altitude maximale est de ${deltaMax} mètres et l'altitude minimale est de ${deltaMin} mètres`);

console.log(`Avec l'objet Math, l'altitude maximale est de ${Math.max(...ALTITUDE_MONTAGNE)} mètres et l'altitude minimale est de ${Math.min(...ALTITUDE_MONTAGNE)} mètres`);
