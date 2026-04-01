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