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
		document.getElementById("div_somme").innerText = a + b;
		console.log(a + b);
	} else {
		a = 0;
		b = 0;
		document.getElementById("div_somme").innerText = a + b;
		console.log(a + b);
	}

}
//somme();

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
function planet(listOfPlanet = PLANETES) {
	console.log(listOfPlanet.length);
	//console.log(PLANETES);
	document.getElementById("div_planete").innerText += `Il y a ${listOfPlanet.length} planètes dans le système : `;

	for (let planete of listOfPlanet) {
		if (planete == "Terre") {
			document.getElementById("div_planete").innerText += ` Hello World ! ${planete} `;
			console.log(`Hello World ! ${planete}`);
		} else {
			document.getElementById("div_planete").innerText += ` ${planete} `;
			console.log(`${planete}`);
		}
	}
	document.getElementById("div_planete").innerText += `\n`;
}
//planet()

function personnage(name = "Julien", age = 33, job = "Formateur") {
	let mon_personnage = new Object();
	mon_personnage = {
		name: name,
		age: age,
		job: job
	}
	//alert(mon_personnage.name);
	console.log(mon_personnage);
	console.log(`Le personnage s'appelle ${mon_personnage.name}, il a ${mon_personnage.age} ans et son travail est ${mon_personnage.job}`);
	return document.getElementById("div_personnage").innerText = `Le personnage s'appelle ${mon_personnage.name}, il a ${mon_personnage.age} ans et son travail est ${mon_personnage.job}`;
	/*
	for (let property in mon_personnage) {
		if (property == "name") {
			let name = `${mon_personnage[property]}`;
		}
		if (property == "age") {
			let age = `${mon_personnage[property]}`;
		}
		if (property == "job") {
			let job = `${mon_personnage[property]}`;
		}
	}
	console.log(`Le personnage s'appelle ${name}, il a ${age} ans et son travail est ${job}`);
    */
}
//personnage("Caro", 37, "Etudiante en développement d'application");
//personnage("Martin", 32, "IT Manager");
//personnage();

/*let dateJour = new Date();
	console.log(dateJour);*/
function date(dateJour = new Date()) {
	let jour = dateJour.getDate();
	let mois = 1 + dateJour.getMonth();
	let an = dateJour.getFullYear();
	console.log(`${jour}/${mois}/${an}`);
	let locale = dateJour.toLocaleDateString()
	console.log(locale);
	document.getElementById("div_date").innerText = `${locale}`;
}
//date();

function dom() {
	let titre2 = document.getElementById("titre2").textContent;
	console.log(`Le texte de l'élement ayant pour id "titre2" est "${titre2}"`);

	let titres = document.getElementsByClassName("titre");
	//console.log(titres);

	let nbreTitres = titres.length;
	console.log(`Le document contient ${nbreTitres} éléments qui ont la classe "titre"`);
	let listeTitres = "Les éléments qui ont la classe titre sont ";
	for (let titre of titres) {
		listeTitres += `"${titre.innerText}" `;

	}
	console.log(`${listeTitres}.`);
	let listes = document.getElementsByTagName("li");

	let listeListes = "Les éléments qui ont des balises <li> sont ";
	for (let liste of listes) {
		listeListes += `"${liste.innerText}" `;

	}
	console.log(`${listeListes}.`);

}
//dom();

function dom_modif() {
	document.getElementById("titre1").innerText = "Bienvenue";
	document.getElementById("titre2").innerText = "Exo JS";
	document.getElementById("paragraphe1").innerText = "Voici quelques fonctions exécutées en javascript.";
	let listes = document.getElementsByTagName("li");
	let insertList = "Liste";

	//function logArrayElements(element, index, array) {

	for (let liste of listes) {
		liste.innerText = `${insertList}`.concat(` ${liste.innerText}`);
	}

}
//dom_modif();

function style(color = "red") {

	document.getElementById("titre1").style.textAlign = "center";
	let titres = document.getElementsByClassName("titre");
	for (let titre of titres) {
		titre.style.color = color;
	}
	document.getElementById("paragraphe1").style.border = "solid black 1px";
	document.getElementById("paragraphe1").style.padding = "10px";
	document.getElementById("liste").style.visibility = "hidden";
}
//style();
window.addEventListener("load", function (event) {
	console.log("OK toute la page est chargée");
	alert("OK toute la page est chargée");
	document.getElementById("somme").addEventListener("click", () => {
		somme()
	});
	document.getElementById("somme").addEventListener("click", () => {
		somme(3, 5)
	});
	document.getElementById("planete").addEventListener("click", () => {
		planet()
	});
	document.getElementById("planete").addEventListener("click", () => {
		planet(["TRAPPIST-1 d", "KOI-1686.01", "LHS 1723 b"])
	});
	document.getElementById("personnage").addEventListener("click", () => {
		personnage()
	});
	document.getElementById("personnage").addEventListener("click", () => {
		personnage("Caro", 37, "Etudiante")
	});
	document.getElementById("date").addEventListener("click", () => {
		date()
	});
	document.getElementById("date").addEventListener("click", () => {
		date(new Date(1970, 0, 1))
	});
	document.getElementById("dom").addEventListener("click", dom);
	document.getElementById("dom_modif").addEventListener("click", dom_modif);
	document.getElementById("style").addEventListener("click", () => {
		style()
	});
	document.getElementById("style").addEventListener("click", () => {
		style(color = "green")
	});

})
