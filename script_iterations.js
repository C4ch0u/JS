// boucles itératives
const END_MSG = `Le tour de manège est fini, direction la pêche aux canards.`;

//Exemple avec une boucle, sur 25 tours !
const MAX = 25;
tour = 0;
console.log('=======AVEC LES BOUCLES=======');
while (tour < MAX) {
	console.log(`Tour ${tour} : on vérifie si tout va bien et on fait voltiger le pompon.`);
	tour++;
}
console.warn(END_MSG);

// Boucle while
let alphabet = 'abcdefghijklmnopqrstuvwxz';
let i = 0;
while (i < alphabet.length) {
	console.log(alphabet[i]);
	i++;
}

//Boucle Do...while
let prenom = 'Julien';
let notes = [
	15,
	14,
	8,
	12,
	10,
	9
];
i = 0;
do {
	console.log(`${prenom} a eu ${notes[i]}/20.`);
	i += 1;
} while (i < notes.length)

//Boucle For
for (let i = 0; i < 10; i++) {
	if (i % 2 == 0) {
		console.log(`${i} est un chiffre pair`);
	} else {
		console.log(`${i} est un chiffre impair`);
	}
}

// For...of
let eleve = [
	'julien',
	33, {
		'html': true,
		'css': true,
		'js': true,
		'php': true,
		'java': false
	}
];
for (let element of eleve) {
	console.log(element);
}

//For...in
let voiture = {
	'marque': 'Ferrari',
	'annee': 2003,
	'couleur': 'rouge',
	'vitesse_max': 280
};
for (let property in voiture) {
	console.log(`${property} : ${voiture[property]}`);
}

//Boucles dans des boucles

//Exemple tableau simple
let notesDuTrimestre = [
	[
		'pierre', 8, 12, 14, 5
	],
	[
		'paul', 9, 16, 4, 9
	],
	[
		'jacques', 18, 10, 9, 12
	]
];
for (let eleve of notesDuTrimestre) {
	for (let note of eleve) {
		console.log(note)
	}
	console.log('------');
}

//Exemple plus compliqué Tableau + Objets
let markers = [
	{
		"name": "Rixos The Palm Dubai",
		"position": [25.1212, 55.1535]
	}, {
		"name": "Shangri-La Hotel",
		"position": [25.2084, 55.2719]
	}, {
		"name": "Grand Hyatt",
		"position": [25.2285, 55.3273]
	}
];
for (let marker of markers) {
	console.log('======');
	for (let property in marker) {
		if (property == 'position') {
			console.log(`Latitude : ${marker[property][0]}`);
			console.log(`Longitude : ${marker[property][1]}`);
		} else {
			console.log(`${property} : ${marker[property]}`);
		}
	}
}
