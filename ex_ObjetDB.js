let products = [
	{
		"_id": {
			"$oid": "5968dd23fc13ae04d9000001"
		},
		"product_name": "sildenafil citrate",
		"supplier": "Wisozk Inc",
		"quantity": 261,
		"unit_cost": "$10.47"
	}, {
		"_id": {
			"$oid": "5968dd23fc13ae04d9000002"
		},
		"product_name": "Mountain Juniperus ashei",
		"supplier": "Keebler-Hilpert",
		"quantity": 292,
		"unit_cost": "$8.74"
	}, {
		"_id": {
			"$oid": "5968dd23fc13ae04d9000003"
		},
		"product_name": "Dextromathorphan HBr",
		"supplier": "Schmitt-Weissnat",
		"quantity": 211,
		"unit_cost": "$20.53"
	}
];
/*
for (let product of products) {
	for (let property in product) {
		if (property == "product_name") {
			let name = `${product[property]}`;

			for (let property in product) {
				if (property == "supplier") {
					let supplier = `${product[property]}`;
					console.log(`${name} (${supplier})`);
				}
			}
		}

		if (property == "unit_cost") {
			let prix_unitaire = `${product[property]}`;
			let puNum = Number(prix_unitaire.replace('$', ''));
			console.log(`Prix unitaire : ${prix_unitaire}`);
			for (let property in product) {
				if (property == "quantity") {

					let quantite = `${product[property]}`;
					let quantiteNum = Number(quantite);
					console.log(`Quantité : ${quantite}`);
					let valeur = puNum * quantiteNum;
					console.log(`Valeur du Stock : ${valeur}$`);
				}

			}

		}

	}
	console.log(`===========`);
}*/
for (let product of products) {
	console.log(`${product.product_name} (${product.supplier})`);
	console.log(`Prix unitaire : ${product.unit_cost}`);
	console.log(`Quantité : ${product.quantity}`);
	let valeur = Number(`${product.unit_cost.replace('$', '')}`) * Number(`${product.quantity}`);
	console.log(`Valeur du stock : ${valeur}$`);
}
