# 検証環境へのデプロイ
## 概要
- ssh接続でEC2へ接続を行った後、githubのリポジトリからコードをcloneし、nodeサーバーを立ち上げます。
- OSは、ubuntuです。

## ssh接続設定
- Macの場合
  - ~/.ssh に ywsXXX.pem をダウンロード
  - ~/.ssh/config に 接続の設定を記述
  ```
  Host ywsXXX-ec2
    User ubuntu
    Hostname 3.128.193.37
    TCPKeepAlive yes
    IdentitiesOnly yes
    IdentityFile ~/.ssh/ywsXXX-ec2.pem
    ForwardAgent yes
  ```
  - コマンドで接続
  ```
  ssh ywsXXX-ec2
  ```

- Windowsの場合(Tera Term を使用)
  - Tera Term 起動
  - ywsXXX.pem をダウンロード
  - ホストに 3.128.193.37 を入力
  - OK ボタン
  - ユーザー名に ubuntu を入力
  - RSA/DSA/ECDSA/ED25519鍵を使う とチェック
    - 秘密鍵に ywsXXX.pem を選択
  - OKボタン

## 検証環境へコードをデプロイ（初回）
  ```
  ssh ywsXXX-ec2
  cd XXX2020
  chmod +x start-staging.sh
  chmod +x deploy.sh
  ./start-staging.sh
  ```
  ※DB schemaの構築は、別途ご対応ください

## 検証環境へコードをデプロイ（２回目以降）
  ```
  ssh ywsXXX-ec2
  cd XXX2020
  ./deploy.sh
  ```
