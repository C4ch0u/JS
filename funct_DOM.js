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
dom();
