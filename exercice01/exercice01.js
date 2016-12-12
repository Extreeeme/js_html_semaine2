var nombre1 = prompt("Entrez un nombre à virgule : ");
if(!isNan(nombre1)){
  nombre1 = Math.round(nombre1);
}
else{
  alert("erreur \n Merci de mettre un . et non une ,");
}
var nombre2 = prompt("Entrez un deuxième nombre à virgule :");
if (isNan(nombre2)){
  alert("erreur \n Merci de mettre un . et non une ,");
}
else {
  var resultat = parseInt(nombre1)*nombre2;
  alert(resultat);
}
