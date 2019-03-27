function style() {
	document.getElementById("titre1").style.textAlign = "center";
	let titres = document.getElementsByClassName("titre");
	for (let titre of titres) {
		titre.style.color = "red";
	}
	document.getElementById("paragraphe1").style.border = "solid black 1px";
	document.getElementById("paragraphe1").style.padding = "10px";
	document.getElementById("liste").style.visibility = "hidden";
}
style();
