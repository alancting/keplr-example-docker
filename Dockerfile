FROM php:7.2.1-apache

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \ 
    apt-get update && \
    apt-get install -y nodejs

RUN apt-get update && \
    apt-get install -qqy \
    libusb-1.0-0-dev \
    libudev-dev

WORKDIR /var/www/html

ADD . $WORKDIR
RUN npm install

EXPOSE 80

RUN a2enmod rewrite
