let choix;
function calculatrice() {
  do {
    choix = parseInt(
      prompt(
        "Veuillez entrer un chiffre afin d'effectuer votre calcul: \n 1 - Additionner \n 2 - Soustraire \n 3 - Multiplier \n 4 - Diviser"
      )
    );

    if (choix >= 1 && choix <= 4) {
      saisie1 = parseInt(prompt("Saisissez un premier chiffre : "));
      saisie2 = parseInt(prompt("Saisissez un deuxième chiffre : "));
      calculer(choix, saisie1, saisie2);
    }
  } while (choix != "" || (choix == null && isNaN(choix) === true));
}
function calculer(choixUtilisateur, chiffre1, chiffre2) {
  try {
    switch (choixUtilisateur) {
      case 1:
        alert("Le résulat est de :" + additionner(chiffre1, chiffre2));
        break;
      case 2:
        alert("Le résulat est de :" + soustraire(chiffre1, chiffre2));
        break;
      case 3:
        alert("Le résulat est de :" + multiplier(chiffre1, chiffre2));
        break;
      case 4:
        alert("Le résulat est de :" + diviser(chiffre1, chiffre2));
        break;
      default:
        throw new Error("Une erreur de saisie est survenue");
        break;
    }
  } catch (error) {
    alert(error);
  }
}
function additionner(chiffre1, chiffre2) {
  return chiffre1 + chiffre2;
}
function soustraire(chiffre1, chiffre2) {
  return chiffre1 - chiffre2;
}
function multiplier(chiffre1, chiffre2) {
  return chiffre1 * chiffre2;
}
function diviser(chiffre1, chiffre2) {
  if (chiffre1 === 0 || chiffre2 === 0) {
    throw new Error("Vous ne pouvez pas diviser un chiffre par 0 !");
  }
  return chiffre1 / chiffre2;
}

console.log(calculatrice());
