function aujourdhui() {
	let dateJour = new Date();

	console.log(dateJour);
	let jour = dateJour.getDate();
	let mois = 1 + dateJour.getMonth();
	let an = dateJour.getFullYear();
	console.log(`${jour}/${mois}/${an}`);
	let locale = dateJour.toLocaleDateString()
	console.log(locale);
}
aujourdhui();
