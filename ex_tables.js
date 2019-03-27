let prenom = prompt(`Entrez votre prenom`);
let note1 = prompt(`Entrez une note entre 0 et 20`);
let note2 = prompt(`Entrez une note entre 0 et 20`);
let note3 = prompt(`Entrez une note entre 0 et 20`);
let note4 = prompt(`Entrez une note entre 0 et 20`);
let note5 = prompt(`Entrez une note entre 0 et 20`);

if (isNaN(prenom) && isNaN(note1) === false && isNaN(note2) === false && isNaN(note3) === false && isNaN(note4) === false && isNaN(note5) === false && Number(note1) >= 0 && Number(note1 <= 20) && Number(note2) >= 0 && Number(note2 <= 20) && Number(note3) >= 0 && Number(note3 <= 20) && Number(note4) >= 0 && Number(note4 <= 20) && Number(note5) >= 0 && Number(note5) <= 20) {
	let table = new Array(prenom, Number(note1), Number(note2), Number(note3), Number(note4), Number(note5));
	let moyenne = (Number(note1) + Number(note2) + Number(note3) + Number(note4) + Number(note5)) / 5;
	console.log(`${prenom} a une moyenne de ${moyenne}/20`);
} else {
	console.error(`Erreur`);
}
