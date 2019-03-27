const PLANETES = [
	"Mercure",
	"Vénus",
	"Terre",
	"Mars",
	"Jupiter",
	"Saturne",
	"Uranus",
	"Neptune",
	"Pluton"
];
console.log(PLANETES);
for (let planete of PLANETES) {
	if (planete == "Terre") {
		console.log(`COUCOU ${planete}`);
	} else {
		console.log(`${planete}`);
	}
}
