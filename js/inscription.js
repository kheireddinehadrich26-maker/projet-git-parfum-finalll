function validerFormulaire() {
  var nom = document.getElementById("nom");
  var prenom = document.getElementById("prenom");
  var email = document.getElementById("email");

  var message = "";

  if (nom.value === "") message += "- Le nom est obligatoire.\n";
  if (prenom.value === "") message += "- Le prénom est obligatoire.\n";

  if (email.value === "") {
    message += "- L'email est obligatoire.\n";
  } else if (!email.value.includes("@")) {
    message += "- Email invalide.\n";
  }

  if (message !== "") {
    alert(message);
    return false;
  }

  return true;
}
function validerFormulaire() {
  var pseudo = document.getElementById("pseudo");
  var motdepasse = document.getElementById("motdepasse");
  var confirmation = document.getElementById("confirmation");
  var telephone = document.getElementById("telephone");
  var conditions = document.getElementById("conditions");

  if (pseudo.value == "") {
    alert("pseudo vide");
  }

  if (motdepasse.value.length < 6) {
    alert("mot de passe court");
  }

  if (motdepasse.value != confirmation.value) {
    alert("mot de passe incorrect");
  }

  if (telephone.value.length != 8) {
    alert("telephone faux");
  }

  if (!conditions.checked) {
    alert("conditions non accepte");
  }

  alert("inscription reussie");
}