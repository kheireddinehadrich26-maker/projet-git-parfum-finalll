document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form-inscription");
    const banner = document.getElementById("banner");

    // ====================== TÉLÉPHONE : 8 CHIFFRES SEULEMENT ======================
    document.getElementById("telephone").addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, '').slice(0, 8);   // uniquement chiffres + max 8

        const hint = document.getElementById("h-telephone");
        hint.textContent = (this.value.length === 8 || this.value.length === 0) ? "" : "Doit contenir exactement 8 chiffres";
        hint.style.color = "red";
    });

    // ====================== CONFIRMATION MOT DE PASSE ======================
    const mdp = document.getElementById("motdepasse");
    const conf = document.getElementById("confirmation");

    conf.addEventListener("input", function () {
        const hint = document.getElementById("h-confirmation");
        if (this.value === mdp.value && this.value !== "") {
            hint.textContent = "✓ Mots de passe identiques";
            hint.style.color = "green";
        } else {
            hint.textContent = "Les mots de passe ne correspondent pas";
            hint.style.color = "red";
        }
    });

    // ====================== SOUMISSION ======================
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = [];

        // Récupération valeurs
        const nom        = document.getElementById("nom").value.trim();
        const prenom     = document.getElementById("prenom").value.trim();
        const email      = document.getElementById("email").value.trim();
        const tel        = document.getElementById("telephone").value.trim();
        const adresse    = document.getElementById("adresse").value.trim();
        const pseudo     = document.getElementById("pseudo").value.trim();
        const mdpVal     = document.getElementById("motdepasse").value;
        const confVal    = document.getElementById("confirmation").value;

        // Validation
        if (!nom) errors.push("• Nom obligatoire");
        if (!prenom) errors.push("• Prénom obligatoire");
        if (!email) errors.push("• Email obligatoire");
        if (!adresse) errors.push("• Adresse obligatoire");
        if (!pseudo) errors.push("• Pseudo obligatoire");

        if (email && !email.includes("@")) errors.push("• Email invalide");
        if (tel && tel.length !== 8) errors.push("• Téléphone doit contenir exactement 8 chiffres");
        if (mdpVal.length < 6) errors.push("• Mot de passe ≥ 6 caractères");
        if (!/[!@#$%^&*]/.test(mdpVal)) errors.push("• Mot de passe doit contenir au moins 1 symbole");

        if (mdpVal !== confVal || !confVal) errors.push("• Les mots de passe ne correspondent pas");

        // Affichage message en haut
        if (errors.length > 0) {
            banner.style.display = "block";
            banner.style.backgroundColor = "#f8d7da";
            banner.style.color = "#721c24";
            banner.style.padding = "15px";
            banner.style.borderRadius = "8px";
            banner.innerHTML = `<strong>❌ Erreurs :</strong><br>${errors.join("<br>")}`;
            return;
        }

        // Succès
        banner.style.display = "block";
        banner.style.backgroundColor = "#d4edda";
        banner.style.color = "#155724";
        banner.innerHTML = "✅ Inscription réussie !<br>Bienvenue chez Parfum Élite !";

        setTimeout(() => {
            form.reset();
            banner.style.display = "none";
            document.querySelectorAll(".hint").forEach(h => h.textContent = "");
        }, 3000);
    });
});

// Bouton Effacer
function resetForm() {
    document.getElementById("form-inscription").reset();
    document.getElementById("banner").style.display = "none";
    document.querySelectorAll(".hint").forEach(h => h.textContent = "");
}