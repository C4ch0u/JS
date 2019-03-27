let total = 0;
const NOMBRE_MAX = 150;
while (total < NOMBRE_MAX) {
	let nombre = prompt(`Entrez un nombre entre 1 et ${NOMBRE_MAX}`);
	if (isNaN(nombre) || nombre > NOMBRE_MAX) {
		alert(`Invalid input, please try again`);

	} else {
		total += Number(nombre);
	}
}
if (total === NOMBRE_MAX) {
	console.info(`Your total is ${total} !You win`);
} else {
	console.error(`Your total is ${total}. You lose. Please try again`);
}
