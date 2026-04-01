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

  var message = "";

  if (pseudo.value === "") message += "- Pseudo obligatoire.\n";

  if (motdepasse.value.length < 6)
    message += "- Mot de passe ≥ 6 caractères.\n";

  if (motdepasse.value !== confirmation.value)
    message += "- Les mots de passe ne correspondent pas.\n";

  if (telephone.value !== "" && telephone.value.length !== 8)
    message += "- Téléphone invalide.\n";

  if (!conditions.checked)
    message += "- Accepter les conditions.\n";

  if (message !== "") {
    alert(message);
    return false;
  }

  if (!confirm("Confirmer l'inscription ?")) return false;

  alert("Inscription réussie !");
  return true;
}