function personnage(name = "Julien", age = 35, job = "Formateur") {
	let mon_personnage = new Object();
	/*mon_personnage.name = name;
	mon_personnage.age = age;
	mon_personnage.job = job;*/
	mon_personnage = {
		name: name,
		age: age,
		job: job
	}
	console.log(mon_personnage);
	console.log(`Le personnage s'appelle ${mon_personnage.name}, il a ${mon_personnage.age} ans et son travail est ${mon_personnage.job}`);
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
}
personnage("Caro", 37, "Etudiante en développement d'application");
personnage("Martin", 32, "IT Manager");
personnage();
