Description du projet
# Projet Parfum - DS2 Docker & CI/CD

## Prérequis
- Docker Desktop (version 20+)
- Docker Compose

## Lancement du projet
```bash
docker compose up -d
Parfum Élégance est un mini site web développé en HTML, CSS et JavaScript dans le cadre d’un projet collaboratif avec Git et GitHub.

Le site représente une boutique de parfums et contient trois pages principales :
🏠 Accueil : présentation, valeurs, histoire, galerie
📝 Inscription : formulaire avec validation JavaScript
🛒 Produits & Commandes : sélection des parfums + calcul du total

🎯 Objectifs :
Apprendre Git & GitHub
Travailler en équipe
Utiliser branches / commits / pull requests
Gérer les conflits
👥 Membres du groupe

👩‍💻 Chiraz Belghuith — Leader / organisation / Git / README
👨‍💻 Aziz — Page inscreption.html
Khaireddine — Page Inscription.js & produits .html 
ibtessem jridi -Produits.js

🗂️ Structure du projet
parfum-elegance/
│
├── html/
│   ├── index.html
│   ├── inscription.html
│   └── produits.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   └── ...
│
└── README.md
💻 Technologies utilisées
HTML5
CSS3
JavaScript
Git
GitHub
✨ Fonctionnalités
🏠 Accueil
Bande de bienvenue
Menu navigation
Présentation
Galerie
Footer
📝 Inscription
Formulaire complet
Validation JavaScript
🛒 Produits
Liste des parfums
Choix des quantités
Calcul du total
Réinitialisation du panier
⚙️ Installation
git clone https://github.com/chirazbelghithcb/projet-git-parfum-finalll.git
cd projet-git-parfum-final
code .

➡️ Ouvrir html/index.html dans le navigateur

🌿 Organisation Git
main → version finale
develop → développement
feature-homepage
feature-inscription
feature-produits
feature-readme
🔧 Commandes Git
git checkout -b feature-homepage
git add .
git commit -m "feat: add homepage"
git push origin feature-homepage

git pull origin develop
git merge feature-homepage
📝 Commits utilisés
feat: add homepage
feat: add inscription
feat: add products
fix: validation
style: design
docs: README
⚠️ Conflit Git

📌 Cause : Deux membres ont modifié la même partie du fichier README.
📌 Solution : Fusion manuelle du code puis commit de correction.

🚀 Workflow
Create repo
Create develop
Create branches
Code avec VS Code
Commit + push
Pull Request
Merge
Version finale
🔗 GitHub

👉 https://github.com/chirazbelghithcb/projet-git-parfum-finalll.git

🔥 Update README

Ce projet utilise GitHub workflow.


Cause du conflit


<img width="763" height="177" alt="image" src="https://github.com/user-attachments/assets/fb5b23f9-fe99-4343-a439-43801953337b" />


Le conflit est apparu lors de la fusion de deux branches (feature-homepage et style-css) dans la branche principale main.

En effet, les deux branches ont modifié la même ligne du fichier index.html, précisément la balise <h1> :

Dans la branche feature-homepage :
<h1>Parfum Élite - Boutique</h1>
Dans la branche style-css :
<h1>Parfum Élite Officiel</h1>

Git n’a pas pu déterminer automatiquement quelle version conserver, ce qui a provoqué un conflit de fusion (merge conflict).

🛠️ Méthode de résolution utilisée

Pour résoudre le conflit, nous avons utilisé une résolution manuelle en suivant les étapes suivantes :

Identification du conflit dans le fichier index.html, marqué par les indicateurs :
<<<<<<< HEAD
=======
>>>>>>> style-css
Analyse des deux versions proposées (current change et incoming change).
Choix de la version finale (ou combinaison des deux).
Par exemple, nous avons choisi :
<h1>Parfum Élite - Boutique Officielle</h1>
Suppression des marqueurs de conflit (<<<<<<<, =======, >>>>>>>).
Validation des modifications avec les commandes :
git add .
git commit -m "Résolution du conflit entre feature-homepage et style-css"
✅ Résultat

Le conflit a été résolu avec succès, et la branche main contient maintenant une version cohérente du fichier index.html.



© 2026 Parfum Élégance
