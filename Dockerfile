FROM nginx:alpine

# Métadonnées
LABEL maintainer="ton.email@esprit.tn"
LABEL version="1.0"
LABEL description="Boutique Parfum - DS2 Docker"

# Copie des fichiers du site
COPY html/ /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY images/ /usr/share/nginx/html/images/

# Copie de la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]