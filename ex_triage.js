const DONNEES_DE_BASE = [
	25,
	-3,
	12,
	25,
	6,
	74
];
//function triage(){}
let DONNEES = DONNEES_DE_BASE.slice(0);
const DONNEES_CROISSANT = []

console.log(DONNEES); // Tableau non trié

/* DONNEES.sort((a, b) => a - b); // Tri ordre croissant
console.log(DONNEES); // Tableau trié par ordre croissant
console.log(DONNEES.reverse()); // Tableau trié par ordre décroissant */

let nbreDonnees = DONNEES.length;
let min = DONNEES[0];
for (let i = 0; i < nbreDonnees; i++) { //Parcourt le tableau amputé du minimum autant de fois que nécessaire

	//Trouve le minimum du tableau
	for (let nombre of DONNEES) {
		if (nombre < min) {
			min = nombre;
		}
	}
	pos = DONNEES.indexOf(min);
	//ampute le tableau DONNEES du minimum trouvé
	DONNEES.splice(pos, 1);
	//Ajoute le minimum trouvé au tableau trié
	DONNEES_CROISSANT.push(min);
	//redéfinit la valeur de min pour le nouveau tableau
	min = DONNEES[0];
}
console.log(DONNEES_CROISSANT);

const DONNEES_DECROISSANT = [];
DONNEES = DONNEES_DE_BASE.slice(0);

nbreDonnees = DONNEES.length;
let max = DONNEES[0];
for (let i = 0; i < nbreDonnees; i++) { //Parcourt le tableau amputé du minimum autant de fois que nécessaire

	//Trouve le minimum du tableau
	for (let nombre of DONNEES) {
		if (nombre > max) {
			max = nombre;
		}
	}
	pos = DONNEES.indexOf(max);

	//ampute le tableau DONNEES du minimum trouvé
	DONNEES.splice(pos, 1);
	//Ajoute le minimum trouvé au tableau trié
	DONNEES_DECROISSANT.push(max);
	//redéfinit la valeur de min pour le nouveau tableau
	max = DONNEES[0];
}
console.log(DONNEES_DECROISSANT);
