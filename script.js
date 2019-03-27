//Opérateurs arithmétiques

let a = 9;
let b = 4;

console.log(`le résultat de l'addition de ${a} et ${b} est égal à ${a+b}.`);
console.log(`le résultat de la soustraction de ${b} à ${a} est égal à ${a-b}.`);
console.log(`le résultat de la multiplication de ${a} par ${b} est égal à ${a*b}.`);
console.log(`le résultat de la division de ${a} par ${b} est égal à ${a/b}.`);
console.log(`le reste de la division de ${a} par ${b} est égal à ${a%b}.`);
console.log(`le résultat de l'opération ${a} puissance ${b} est égal à ${a**b}.`);


//Opérateurs de comparaison
b = 10;
if (a > b) {
  console.log(`${a} est strictement supérieur à ${b}`);
} else {
  if (a === b) { //opérateur d'égalité
    console.log(`${a} est égal à ${b}`);
  } else {
    console.log(`${a} est strictement inférieur à ${b}`);
  }
};

//Opérateurs d'égalité

//égalité faible ne vérifie pas le type
b = "9";
console.log(a == b);
//égalité stricte (sont égaux et de même type)
console.log(a === b);

//inégalité faible ne vérifie pas le type
console.log(a != b);
//inégalité stricte (sont différents et/ou de types différents)
console.log(a !== b);


//Opérateurs logiques

let oeuf = 10;
let lait = 3;
let farine = 5;
let sucre = 0;
let beurre = 10;
if (oeuf && lait && farine) {
  console.log(`On va manger des crêpes aujourd'hui !`);
}
if (sucre || beurre) {
  console.log(`...et en plus elles seront bonnes !!`);
}

//Algo adolescent

let age = prompt("Entrez votre âge", "<votre âge ici>");
const MAX_AGE = 150;








if (age < 0) {
  console.error(`Age négatif`);
  alert(`Veuillez corriger votre âge`);
} else if (age >= 0 && age < 3) {
  console.log(`Vous êtes un bébé !`);
  document.getElementById('monTitre').innerHTML = `Vous êtes un bébé de ${age} ans!`;
} else if (age >= 3 && age < 13) {
  console.log(`Vous êtes un enfant !`);
  document.getElementById('monTitre').innerHTML = `Vous êtes un enfant de ${age} ans !`;
} else if (age >= 13 && age < 21) {
  console.log(`Vous êtes un adolescent !`);
  document.getElementById('monTitre').innerHTML = `Vous êtes un adolescent de ${age} ans!`;
} else if (age >= 21 && age < 65) {
  console.log(`Vous êtes un adulte !`);
  document.getElementById('monTitre').innerHTML = `Vous êtes un adulte de ${age} ans!`;
} else if (age >= 65 && age < MAX_AGE) {
  console.log(`Vous êtes un senior !`);
  document.getElementById('monTitre').innerHTML = (`Vous êtes un senior de ${age} ans!`);
} else {
  console.warn(`Age à vérifier`);
  alert(`Veuillez vérifier votre âge, il semble très élevé !`);
  console.log(`Vous êtes un senior !`)
  document.getElementById('monTitre').innerHTML = `Vous êtes un senior de ${age} ans!`;
}
