const DONNEES = [
	4,
	'a',
	58,
	"45", {
		"number": 61
	},
	56,
	2,
	"z"
];
let nombres = new Array;
for (let donnee of DONNEES) {
	if (typeof donnee === "number") {
		nombres.push(donnee);
	}
}
console.log(nombres);
