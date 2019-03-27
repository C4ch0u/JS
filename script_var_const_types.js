
//Variables constantes et types en JS

// Alertes

alert('Hello world');

//Oubli ; pas d'incidence
alert('Bonjour le monde')



//Commentaires

// Une ligne

//alert('Hello world');     Cette ligne ne sera pas exécutée dans votre script

// Un bloc
/*
alert('Hello');
alert('Bonjour');
Tout ce bloc ne sera pas exécuté
*/



//Variables

//Sensibilité à la casse
let prenom = 'julien a';
let Prenom = 'julien b';
console.log(prenom); // Affichera "julien a"
console.log(Prenom); // Affichera "julien b"
/*console.log(PRENOM); // Affichera une erreur car cette variable n'existe pas*/



//Mots clés réservés

/*let super = 'Mon super texte'; Votre script plantera, et vous aurez un joli message d'erreur du type : Uncaught SyntaxError: Unexpected token super*/

let superTexte = "Mon super texte";



//Constantes et variables

const ANNEE_NAISSANCE = 1981;
let anneeEnCours = 2019;
console.log(anneeEnCours - ANNEE_NAISSANCE);

//erreur on ne redéfinit pas une constante
/*const ANNEE_NAISSANCE = 1985;
let anneeEnCours = 2019;
console.log(anneeEnCours - ANNEE_NAISSANCE);*/

//Redéfinition du paramètre
//ANNEE_NAISSANCE = 1981;
anneeEnCours = 2025;
console.log(anneeEnCours - ANNEE_NAISSANCE);



//Typage des variables

let mot = "Bonjour";
console.log(typeof mot);
mot = 3;
console.log(typeof mot);
mot = true;
console.log(typeof mot);
mot = "3";
console.log(typeof mot);

let a = 3;
let b = 4
console.log(a + b);
a = "3";
b = "4";
console.log(a + b);

//String
prenom = "Julien";
let bonjour = "Salut"
console.log(`${bonjour} ${prenom}`);

//Boolean
let vrai = true;
let faux = false;
console.log(`${typeof vrai} ${vrai}`);
console.log(`${typeof faux} ${faux}`);

//Undefined
let test;
console.log(test);



//Tableaux

//Tableau simple
let listeEleve = ['julien', 'pierre', 'paul', 'jacques', 'maxime'];
console.log(listeEleve);

console.log(listeEleve[1]);


//Tableaux imbriqués

let notesDuTrimestre = [
  ['pierre', 8, 12, 14, 5],
  ['paul', 9, 16, 4, 9],
  ['jacques', 18, 10, 9, 12]
];
console.log(notesDuTrimestre);



//Objets prédéfinis

//Objet Math
console.log(Math.fround(10.75)); //Affichera 11



//Création Objets

//Objet voiture
let voiture = {
  'marque': 'Ferrari',
  'annee': 2003,
  roule: () => console.log('Vrouuuum'),
  klaxon: () => console.log('Tût Tût')
};

console.log(voiture.marque); //Affichera la marque
console.log(voiture.annee); //Affichera l'année
voiture.roule(); //Exécutera la méthode 'roule'
voiture.klaxon(); //Exécutera la méthode 'klaxon'

//Objet Eleve
let eleve = {
  'name': 'caro',
  'notes': [10, 16, 12, 17, 8, 19, 11],
  moyenne: (notes) => {
    let cnt = 0;
    notes.forEach(function(element) {
      cnt += element;
    });
    return Math.ceil(cnt / notes.length);
  }
}
console.log(`${eleve.name} a une moyenne de ${eleve.moyenne(eleve.notes)}/20 cette année.`); //Affichera la moyenne des notes arrondie à l'entier supérieur. Ici : 11
