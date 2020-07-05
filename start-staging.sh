#!/bin/bash

# masterブランチからclone
git clone https://github.com/enbunsui/PBL2020.git

# WebServer, DBServer のインストール
sudo apt install mysql-server
sudo service mysql start
sudo apt install nginx
sudo service nginx start