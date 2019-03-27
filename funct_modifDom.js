function dom_modif() {
	document.getElementById("titre1").innerText = "Bienvenue";
	document.getElementById("titre2").innerText = "Exo JS";
	document.getElementById("paragraphe1").innerText = "Voici quelques fonctions exécutées en javascript.";
	let listes = document.getElementsByTagName("li");
	let insertList = "Liste";
	let newListItem
	//function logArrayElements(element, index, array) {

	for (let liste of listes) {
		liste.innerText = `${insertList}`.concat(` ${liste.innerText}`);
	}

}
dom_modif();
