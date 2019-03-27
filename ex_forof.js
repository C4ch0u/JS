const MOTS = [
	'Bonjour,',
	'je',
	'suis',
	'un',
	'stagiaire',
	'en',
	'développement',
	'web',
	'et',
	'je',
	'fais',
	'des',
	'progrès',
	'tous',
	'les',
	'jours.'
];
let phrase = "";
for (let mot of MOTS) {
	phrase += ` ${mot}`;
}
console.log(phrase.trim());
