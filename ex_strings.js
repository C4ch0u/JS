if (window.confirm("Acceptez-vous de nous communiquer certaines informations personnelles") === false) {
	alert(`Tant pis!!!`);
} else {
	let surname = prompt(`Entrez votre nom`);
	let name = prompt(`Entrez votre prénom`);
	if (isNaN(surname) && isNaN(name)) {
		let contact = `${name} ${surname}`;
		if (contact.length > 20) {
			alert(`Veuillez saisir un autre nom`);
			document.location.reload(true);
		} else {
			console.log(contact.toUpperCase());
		}
	} else {
		console.log(`Mauvais format de saisie`);
		document.location.reload(true);
	}
}
