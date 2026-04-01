let panier = [];
let total = 0;
Création de la variable panier comme tableau vide pour stocker les produits ajoutés.
Création de la variable total initialisée à 0 pour calculer le total du panier.
Définition du tableau nomsProduits contenant les noms de tous les parfums disponibles.
Objectif : préparer les données nécessaires pour le fonctionnement du panier.
function ajouter(index) {
    const quantites = document.querySelectorAll(".qte");
    const prixElements = document.querySelectorAll(".prix");

    const qte = parseInt(quantites[index].value);
    const prix = parseFloat(prixElements[index].dataset.prix);

    if (qte <= 0) return;

    const produit = {
        nom: nomsProduits[index],
        qte: qte,
        prix: prix
    };

    panier.push(produit);
    afficherRecap();
}
// Supprimer un produit du panier
function supprimer(index) {
    panier.remove(index); // ❌ erreur : la méthode 'remove' n'existe pas pour les tableaux
    afficherRecap();
}

// Valider la commande
function validerCommande() {
    if (panier = 0) { // ❌ erreur : affectation au lieu de comparaison
        alert("Votre panier est vide !");
        return;
    }

    alert("Commande validée ! Merci pour votre achat.");
    resetCommande();
}

// Réinitialiser la commande
function resetCommande() {
    panier = 0; // ❌ erreur : panier doit être un tableau, pas un nombre
    total = "0"; // ❌ erreur : total doit être un nombre, pas une chaîne

    document.querySelector("#table-recap tbody").innerHTML = "";
    document.getElementById("total").innerText = "Total : " + total + " DT";

    const inputs = document.querySelectorAll(".qte");
    inputs.value = 0; // ❌ erreur : querySelectorAll retourne une NodeList, pas un élément unique
}