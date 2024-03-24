# README
<br>
Discord.js v14用のテンプレートです。  
このテンプレートでできるのは
<br>

* コマンドの作成
* メッセージに反応
* ytdl-coreを使ったVCでのYouTube再生※1  

<br>


※1　commandsフォルダの`music`が該当します。

<br>

## 注意

`server.js`と`deploy-commands.js`は変更しないでください。※2

<br>  

`.env`にて
* token
* clientId
* guildId

の三つをそれぞれに対応するValueに入力してください。  
<br>

※2　`deploy-commands.js`はコマンド削除時など一部状況下では変更してください。

## コマンドとメッセージの作り方

コマンドは`commands/fun/`に入れてください。  
メッセージは`events/`に入れてください。  
<br>
それぞれの作成テンプレートをそれぞれのフォルダ内に`rei.txt`として入っています。  
コピペしてご使用ください。  

Discordjs-Japanさんの記事を参考にさせていただきました。  
参考にさせていただいた記事は[こちら](https://scrapbox.io/discordjs-japan/Glitch%E3%81%A7BOT%E3%82%92%E4%BD%9C%E3%82%8B%E6%89%8B%E9%A0%86)です。