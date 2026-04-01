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
// Version incorrecte
function afficherRecap() {
    const tbody = document.querySelector("#table-recap tbody");
    tbody.innerHTML = "";

    // Oublié le mot-clé let ou const => global variable accidentelle
    total = 0;

    panier.forEach((item, i) => {
        // Erreur de calcul: on met juste item.prix au lieu de item.qte * item.prix
        const sousTotal = item.prix;

        const tr = document.createElement("tr");

        // Erreur de syntaxe: oubli du backtick ` ou des ${}
        tr.innerHTML = '
            <td>' + item.nom + '</td>
            <td>' + item.qte + '</td>
            <td>' + item.prix DT</td>   // DT non mis entre quotes
            <td>' + sousTotal + '</td>
            <td><button onclick="supprimer(i)">Supprimer</button></td>
        ';

        // Erreur: oublie d'ajouter la ligne au tbody
        // tbody.appendChild(tr); 
    });

    // Erreur: mauvaise id ou oubli de .innerText
    document.getElementById("total").text = "Total : " + total + " DT";
}