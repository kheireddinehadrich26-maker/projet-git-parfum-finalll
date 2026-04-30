// ====================== PANIER - VERSION SIMPLE & TESTÉE ======================

let panier = [];

// Format prix TND (3 décimales)
function prix(p) { return parseFloat(p).toFixed(3) + " DT"; }

// Ajouter au panier
function ajouterAuPanier(index) {
    const cartes = document.querySelectorAll(".carte-produit");
    const carte = cartes[index];
    if (!carte) { alert("Produit non trouvé"); return; }
    
    const nom = carte.querySelector(".nom-produit").textContent.trim();
    const prixUnit = parseFloat(carte.querySelector(".prix").dataset.prix);
    const qteInput = carte.querySelector(".qte");
    const qte = parseInt(qteInput.value) || 0;
    
    if (qte <= 0) {
        alert("⚠️ Entrez une quantité > 0");
        qteInput.focus();
        return;
    }
    
    // Vérifier si déjà dans panier → incrémenter
    const existant = panier.find(p => p.id === carte.dataset.id);
    if (existant) {
        existant.qte += qte;
    } else {
        panier.push({
            id: carte.dataset.id,
            nom: nom,
            prix: prixUnit,
            qte: qte
        });
    }
    
    qteInput.value = 0; // Reset champ
    afficherPanier();
    alert("✅ " + nom + " ajouté au panier !");
}

// Afficher le panier
function afficherPanier() {
    const tbody = document.getElementById("panier-body");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    let total = 0;
    
    if (panier.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#777">Panier vide</td></tr>';
        document.getElementById("total").textContent = "Total : 0.000 DT";
        return;
    }
    
    panier.forEach((p, i) => {
        const sousTotal = p.qte * p.prix;
        total += sousTotal;
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${p.nom}</td>
            <td>${p.qte}</td>
            <td>${prix(p.prix)}</td>
            <td><strong>${prix(sousTotal)}</strong></td>
            <td><button class="btn-supprimer" onclick="supprimerDuPanier(${i})">✕</button></td>
        `;
        tbody.appendChild(row);
    });
    
    document.getElementById("total").textContent = "Total : " + prix(total);
}

// Supprimer du panier
function supprimerDuPanier(index) {
    if (confirm("Supprimer cet article ?")) {
        panier.splice(index, 1);
        afficherPanier();
    }
}

// Vider tout le panier
function viderPanier() {
    if (panier.length === 0) return;
    if (confirm("Vider TOUT le panier ?")) {
        panier = [];
        afficherPanier();
    }
}

// Valider commande
function validerCommande() {
    if (panier.length === 0) {
        alert("❌ Votre panier est vide !");
        return;
    }
    
    const recap = panier.map(p => `• ${p.nom} × ${p.qte} = ${prix(p.qte * p.prix)}`).join("\n");
    const total = panier.reduce((sum, p) => sum + p.qte * p.prix, 0);
    
    if (confirm(`📋 CONFIRMER COMMANDE ?\n\n${recap}\n\n💰 Total : ${prix(total)}`)) {
        alert("🎉 Commande validée ! Merci pour votre achat.");
        panier = [];
        afficherPanier();
    }
}

// Initialisation
document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ produits.js chargé - Panier prêt");
    
    // Nettoyer les champs quantité si texte invalide
    document.querySelectorAll(".qte").forEach(input => {
        input.addEventListener("input", function() {
            this.value = this.value.replace(/[^0-9]/g, "");
        });
    });
});