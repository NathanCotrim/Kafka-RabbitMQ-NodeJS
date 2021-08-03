#!/bin/bash
~

#UPDATING ALL PACKAGES ><><><><
echo "\033[0;31m  Updating Packages... \033[0m"
sudo apt update -y

#INSTALLING NODEJS 16x ><><><><
echo "\033[0;31m  Installing NodeJS 16x... \033[0m"
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt install nodejs -y

#INSTALLING DOCKER ><><><><
echo "\033[0;31m  Installing Docker... \033[0m"
sudo apt-get remove \
    docker \
    docker-engine \
    docker.io \
    containerd runc -y

sudo apt update

sudo apt install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable" -y

sudo apt update

sudo apt install docker-ce docker-ce-cli containerd.io -y
#END DOCKER INSTALLATION ><><><><

#INSTALLING DOCKER-COMPOSE ><><><><
echo "\033[0;31m  Installing Docker-Compose... \033[0m"
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
#END DOCKER-COMPOSE INSTALLATION ><><><><

echo "\e[1;32m Done $(date +%T) \e[0m"
