//Fonction date
let today = new Date();
let dayOfWeek = today.getDay();

console.log(isWeekend(dayOfWeek)); //fonction(ma variable qui renvoie au rang du jour d'aujourd'hui)

function isWeekend(day) {
	if (day == 0 || day == 6) {
		return true;
	} else {
		return (day == 0 || day == 6);
	}
	//return (day == 0 || day == 6); <- autre syntaxe possible, écriture compacte de la même fonction
}

let a = 5;
let b = 9;
let resultat = somme(a, b);
console.log(resultat);
function somme(c, d) { //a et b ne sont pas les mêmes a et qu'en haut
	return c + d;
}
//console.log(`c=${c}`); affiche une erreur car la variable c n'est pas définie (c est un paramètre de la fonction, il ne sort pas du scope de la fonction)

let resultatSoustraction = soustraction(a, b);
console.log(resultatSoustraction);
function soustraction(a, b) { //a et b ne sont pas les mêmes a et qu'en haut
	a = 25; //ici on écrase le paramètre a donc la fonction est 25 - b
	console.log(`a=${a}`); // on écrit la valeur du paramètre
	return a - b;

}
console.log(`a=${a}`); // on retourne la valeur de la variable

let resultatMultiplication = multiplication(a, b);
console.log(resultatMultiplication);
function multiplication(a, b) { //a et b ne sont pas les mêmes a et qu'en haut
	return a * b;
}
let resultatDivision = division(a, b);
console.log(resultatDivision);
function division(a, b) { //a et b ne sont pas les mêmes a et qu'en haut
	return a / b;
}

//Création fonction isNegative
// avec if
function isNegative(x) {
	if (x < 0) {
		return true;
	} else {
		return false;
	}
}
// en ternaire
function isNegative2(x) {
	return (x < 0)
		? true
		: false;
}
console.log(isNegative2(-8)); // on peut afficher dans la console directement la valeur de la fonction appliquée à une valeur

// en fonction fléchée
let isNegative3 = (a) => {
	if (a < 0) 
	;
	{
		return true;
	}
	return false;
}
console.log(isNegative3(34));

// Fonctions fléchées
//Cas 1
let isPositive = (a) => {
	if (a > 0) {
		return true; //La on sort de notre fonction
	}
	return false; // pas d'obligation de mettre le else
}
//Cas 2
let isNull = (a) => (a == 0)
	? true
	: false; //ternaire
console.log(isPositive(6)); // affiche résultat pour une valeur fixée directement
console.log(isNull(a)); // affiche le résultat pour une variable définie plus haut, ici a = 5

//Cas 3
let double = (a) => a * 2; //pas de return ni d'accolades car un seul statement
console.log(double(10)); // affiche résultat pour une valeur fixée directement
console.log(double(`${a}`)); // affiche le résultat pour une variable définie plus haut, ici a = 5

//Création d'une fonction exposant
let exposant = (a) => a ** a; //pas de return ni d'accolades car un seul statement
console.log(exposant(10));
console.log(exposant(3));

//Création d'une fonction isPair
let isPair = (a) => (a % 2 == 0)
	? true
	: false;
console.log(isPair(8));
console.log(isPair(33));

//Fonction anononyme
const displayError = function (str) {
	console.error(str);
}
displayError("Appel d'une fonction anonyme.");

//Fonction non anonyme
const displayError2 = function disp(str) { //Peut être utile dans certains cas (trace en debugage, ou rappel en récursif)
	console.error(str);
}
displayError2("Appel d'une fonction anonyme.");

//Fonction sans paramètres
function nombreAleatoire() {
	return Math.floor(Math.random() * 1000);
}
console.log(nombreAleatoire());

// la même en Fonction fléchée
let nombreAleatoire2 = () => Math.floor(Math.random() * 1000);

console.log(nombreAleatoire2());

//Paramètres par défaut
const displayError3 = function (str = `Une erreur s'est produite dans le code`) {
	console.error(str);
}

displayError3(); //exemple sans paramètre particulier
displayError3("Une erreur s'est produite ligne 345"); //exemple avec un paramètre déterminé

// Plusieurs paramètres par défaut
const displayError4 = function (str = `Une erreur s'est produite ici`, ligne = 0, colonne = 0) {
	let error = str;
	if (ligne != 0) {
		error += `, ligne : ${ligne}, colonne : ${colonne}`;
	}
	console.error(error);
}
displayError4(); //comportement standard, message de base, aucune ligne spécifiée
displayError4(`Ma variable n'est pas un nombre`, 410, 23); //nouveau comportement message personnalisé et ligne de l'erreur