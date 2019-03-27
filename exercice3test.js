let prenom = prompt(`Entrez votre prenom`);
const NBRE_NOTES = 5;
let notes = new Array;
for (let i = 0; i < NBRE_NOTES; i++) {
	let note = prompt(`Entrez une note entre 0 et 20`);
	notes.push(Number(note));
}

let table = new Array(prenom, notes);

const NOTE_MIN = 0;
const NOTE_MAX = 20;
let total;

if (isNaN(prenom)) {
	for (let note of notes) {
		if (note >= NOTE_MIN && note <= NOTE_MAX) {
			total += Number(note);

		} else {
			console.error(`Erreur`);

		}

	}

	console.log(`${prenom} a une moyenne de ${moyenne}/20`);

} else {
	console.error(`Erreur`);

}
