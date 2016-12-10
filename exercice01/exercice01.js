var age = prompt("Quel âge avez-vous ?");
var sexe = prompt("Êtes vous un garçon ou une fille ?");
var nationalite = prompt("De quelle nationalité êtes-vous ?");
if (age > 18 && sexe == "garçon") {
	alert("Vous êtes un garçon majeur " +nationalite);
}
else if (age > 18 && sexe == "fille"){
	alert("Vous êtes une fille majeur " +nationalite);
}
else if (age <= 18 && sexe == "fille"){
	alert("Vous êtes une fille mineur " +nationalite);
}
else if (age <= 18 && sexe == "garçon") {
	alert("Vous êtes un garçon mineur " +nationalite);
}