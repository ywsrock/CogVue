#!/bin/bash

# nodeのプロセスを切って、masterブランチをpull
# その後、バックグラウンドでnodeサーバーを立ち上げる
killall node
git pull --rebase origin master
(cd OreSupport/ore-SupportClient/ore-client && nohup npm run serve >/dev/null 2>&1 &)
(cd OreSupport/ore-SupportServer/oreServer && nohup npm start >/dev/null 2>&1 &)