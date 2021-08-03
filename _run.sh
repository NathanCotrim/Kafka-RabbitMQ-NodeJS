#!/bin/bash
~

_user=$(whoami)
_dir=$(pwd)

echo "\e[1;32m Hi $_user, thanks to use my project - $_dir \e[0m"

echo "\033[0;31m  Upping Containers... \033[0m"
#UPPING DOCKER-COMPOSE CONTAINERS ><><><><
sudo docker-compose up -d
#VERIFY ThEY ARE RUNNING ><><><><
sudo docker-compose ps -a

echo "\033[0;31m  Starting Micro-Services... \033[0m"
echo "\e[1;32m Done $(date +%T) \e[0m"
#STARTING MICRO-SERVICES
cd api && nohup yarn dev && cd ../certificate && nohup yarn dev && cd ../emails && nohup yarn dev && cd ..

#TO STOP MICRO-SERVICES PROCESS JUST PRESS C^ ><><><><
