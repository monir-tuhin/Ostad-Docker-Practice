#From ubuntu:20.
## bunch of labels
#LABEL version=1.0
#LABEL maintainer=Monir
## because apache asks for time zone
#ARG DEBIAN_FRONTEND=noninteractive
#
#RUN apt-get update && apt-get install apache2 php \
#libapache2-mod-php -y
#RUN rm /var/www/html/index.html
#COPY ./index.php /var/www/html/
#CMD ["apachectl", "-D", "FOREGROUND"]

# we have a built in image which have php, apache and linux. so latest docker file will be
FROM php:8.3.4-apache
COPY ./index.php /var/www/html/c
