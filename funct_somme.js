/*let VALEURS = new Array;

for (i = 0; i < 2; i++) {
	let valeur = prompt("Entrez une valeur");
	if (isNaN(valeur)) {

		alert(`Vous n'avez pas entré un nombre`);
		document.location.reload(true);

	} else {
		VALEURS.push(Number(valeur));
	}
}
let addition = (a, b) => a + b;
console.log(addition(...VALEURS));
*/
function somme(a = 0, b = 0) {
	if (a === 0 && b === 0) {
		let nombre1 = prompt("Entrez une valeur");
		if (isNaN(nombre1)) {

			alert(`Vous n'avez pas entré un nombre, veuillez recommencer`);
			document.location.reload(true);

		} else {
			a = parseInt(Number(nombre1));

		}
		let nombre2 = prompt("Entrez une valeur");
		if (isNaN(nombre2)) {

			alert(`Vous n'avez pas entré un nombre, veuillez recommencer`);
			document.location.reload(true);

		} else {
			b = parseInt(Number(nombre2));

		}
		console.log(a + b);
	} else {
		a = 0;
		b = 0;
		console.log(a + b);
	}
}
somme(3, 7);
