/*let valeur1 = prompt("Entrez une valeur");
let valeur2 = prompt("Entrez une valeur");
if (isNaN(valeur1) == true || isNaN(valeur2) == true) {
	console.log(`Vous n'avez pas entré le format souhaité`);
} else {
	let num1 = Number(valeur1);
	let num2 = Number(valeur2);
	console.log(`l'addition de ${num1} et ${num2} fait`, num1 + num2);
	console.log(`la soustraction de ${num2} à ${num1} fait`, num1 - num2);
	console.log(`la multiplication de ${num1} par ${num2} fait`, num1 * num2);
	console.log(`la division de ${valeur1} par ${valeur2} fait`, num1 / num2);
	(num1 % 2 === 0)
		? console.log(`le nombre ${num1} est pair`)
		: console.log(`le nombre ${num1} est impair`);
	(num2 % 2 === 0)
		? console.log(`le nombre ${num2} est pair`)
		: console.log(`le nombre ${num2} est impair`);
}*/
let VALEURS = new Array;
for (i = 0; i < 2; i++) {
	let valeur = prompt("Entrez une valeur");
	(isNaN(valeur) == true)
		? document.location.reload(true)
		: VALEURS.push(Number(valeur));
}
let addition = (a, b) => a + b;
let soustraction = (a, b) => b - a;
let multiplication = (a, b) => a * b;
let division = (a, b) => a / b;

console.log(`l'addition de ${VALEURS[0]} et ${VALEURS[1]} fait ${addition(...VALEURS)}, la soustraction de ${VALEURS[1]} à ${VALEURS[0]} fait ${soustraction(...VALEURS)}, leur multiplication fait ${multiplication(...VALEURS)} et la division de ${VALEURS[0]} et ${VALEURS[1]} fait ${division(...VALEURS)}`);

let isEven = (x) => {
	(x % 2 == 0)
		? console.log(`${x} est pair`)
		: console.log(`${x} est impair`)
};
for (let valeur of VALEURS) {
	isEven(valeur);
}
