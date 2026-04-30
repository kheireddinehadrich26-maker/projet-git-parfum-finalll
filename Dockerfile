FROM nginx:alpine

# Copie TOUT le contenu du projet directement dans Nginx (structure plate)
COPY . /usr/share/nginx/html/

# Copie la configuration Nginx personnalisée (si tu en as une)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Optionnel : pour éviter les problèmes de cache
LABEL maintainer="ton nom"