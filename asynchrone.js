console.log(`Début de l'exécution du script`);
//setTimeout, met un délai avant l'exécution
setTimeout(function () {
	console.log("Ce message s'affiche une seconde après l'exécution de mon script.")
}, 1000);
setInterval(heure, 1000);
let lscreen = screen.width - 50;
console.log(lscreen);
let compteur = 0;

let myDeplacement = setInterval(deplacement, 1);

fetch('http://cda2019.webboy.fr/veille.php').then((result) => {
	console.warn('Données récupérées !');
	result.json().then(function (data) {
		console.warn('Données Jsonizées !');
		console.log(data);
	});
});

console.log(`Fin de l'exécution du script`);

function heure() {
	let maDate = new Date();
	console.log(maDate.toLocaleTimeString());
}

function deplacement() {
	if (compteur <= lscreen) {
		document.getElementById("boite").style.left = `${compteur}px`;
		compteur++;

		console.log(document.getElementById("boite").style.left);
	} else {

		clearInterval(myDeplacement);

	}

}

console.log(document.getElementById("boite").style.left);
