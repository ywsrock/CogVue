#!/bin/bash

# masterブランチからclone
git clone https://github.com/enbunsui/PBL2020.git
(cd OreSupport/ore-SupportClient/ore-client && npm install)
(cd OreSupport/ore-SupportServer/oreServer && npm install)

# WebServer, DBServer のインストール
sudo apt install mysql-server
sudo service mysql start
sudo apt install nginx
sudo service nginx start