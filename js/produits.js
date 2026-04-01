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
// Afficher le tableau récapitulatif
function afficherRecap() {
    const tbody = document.querySelector("#table-recap tbody");
    tbody.innerHTML = "";

    total = 0;

    panier.forEach((item, i) => {
        const sousTotal = item.qte * item.prix;
        total += sousTotal;

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.nom}</td>
            <td>${item.qte}</td>
            <td>${item.prix} DT</td>
            <td>${sousTotal} DT</td>
            <td><button onclick="supprimer(${i})">Supprimer</button></td>
        `;

        tbody.appendChild(tr);
    });

    document.getElementById("total").innerText = "Total : " + total + " DT";
}