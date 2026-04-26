# Image de base légère et rapide (Nginx + Alpine)
FROM nginx:alpine

# Copie les fichiers HTML (ils sont dans le dossier html/)
COPY html/ /usr/share/nginx/html/

# Copie les dossiers CSS, JS et images au bon endroit
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY images/ /usr/share/nginx/html/images/

# Expose le port 80 (port interne de Nginx)
EXPOSE 80

# Démarrage automatique de Nginx
CMD ["nginx", "-g", "daemon off;"]