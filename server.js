const http = require("http");
const querystring = require("node:querystring");
const cron = require('node-cron')

//GASでwakeさせること。

http
  .createServer(function(req, res) {
    if (req.method == "POST") {
      var data = "";
      req.on("data", function(chunk) {
        data += chunk;
      });
      req.on("end", function() {
        if (!data) {
          res.end("No post data");
          return;
        }
        var dataObject = querystring.parse(data);
        console.log("post:" + dataObject.type);
        if (dataObject.type == "wake") {
          console.log("Woke up in post"); 
          res.end();
          return;
        } 
        res.end(); 
      });
    } else if (req.method == "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Discord Bot is Oprateing!");
    }
  })
  .listen(3000);

const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const token = process.env.DISCORD_BOT_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages,  GatewayIntentBits.GuildVoiceStates] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}


const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}  

cron.schedule('0 7 * * *', () => {
     console.log('7時だよ')
     client.channels.cache.get('1164168973634523259').send('おはよう！！7時だよ！！！');
 }, {
   scheduled: true,
   timezone: "Asia/Tokyo"
 });　　



const sun1 = new EmbedBuilder()
	        .setColor([255,255,0])
	        .setTitle('日曜日天賦素材1')
          //.setDescription(ano[random])  
          //.setThumbnail(user.displayAvatarURL({size: 1024}))
          .addFields(
		        { name: '\u200B', value: '\u200B'},
		        { name: '自由シリーズ', value: '忘却の峡谷[モンド]', inline: true },
		        { name: '抗争シリーズ', value: '忘却の峡谷[モンド]', inline: true },
		        { name: '詩文シリーズ', value: '忘却の峡谷[モンド]', inline: true }
          )
	        .setTimestamp()

const sun2 = new EmbedBuilder()
	        .setColor([255,255,0])
	        .setTitle('日曜日天賦素材2')
          .addFields(
            { name: '\u200B', value: '\u200B'},
		        { name: '繁栄シリーズ', value: '太山府[璃月]', inline: true},
		        { name: '勤労シリーズ', value: '太山府[璃月]', inline: true},
		        { name: '黄金シリーズ', value: '太山府[璃月]', inline: true}
          )
          .setTimestamp()

const sun3 = new EmbedBuilder()
	        .setColor([255,255,0])
	        .setTitle('日曜日天賦素材3')
          .addFields(
            { name: '\u200B', value: '\u200B'},
            { name: '浮世シリーズ', value: '菫色ノ庭[稲妻]', inline: true},
		        { name: '風雅シリーズ', value: '菫色ノ庭[稲妻]', inline: true},
		        { name: '天光シリーズ', value: '菫色ノ庭[稲妻]', inline: true}
          )
          .setTimestamp()

const sun4 = new EmbedBuilder()
	        .setColor([255,255,0])
	        .setTitle('日曜日天賦素材4')
          .addFields(
            { name: '\u200B', value: '\u200B'},
		        { name: '忠言シリーズ', value: '無学の塔[スメール]', inline: true},
		        { name: '創意シリーズ', value: '無学の塔[スメール]', inline: true},
		        { name: '篤行シリーズ', value: '無学の塔[スメール]', inline: true}
          )
          .setTimestamp()

const sun5 = new EmbedBuilder()
	        .setColor([255,255,0])
	        .setTitle('日曜日天賦素材5')
          .addFields(
            { name: '\u200B', value: '\u200B'},
		        { name: '公平シリーズ', value: '蒼白の遺栄[フォンテーヌ]', inline: true},
		        { name: '正義シリーズ', value: '蒼白の遺栄[フォンテーヌ]', inline: true},
		        { name: '秩序シリーズ', value: '蒼白の遺栄[フォンテーヌ]', inline: true},
          )
          .setTimestamp()


//月曜日から

const mon = new EmbedBuilder()
          .setColor([255,255,0])
	        .setTitle('月曜日天賦素材')
          .addFields(
            { name: '\u200B', value: '\u200B'},
		        { name: '自由シリーズ', value: '忘却の峡谷[モンド]', inline: true},
		        { name: '繁栄シリーズ', value: '太山府[璃月]', inline: true},
		        { name: '浮世シリーズ', value: '菫色ノ庭[稲妻]', inline: true},
          )
          .addFields(
            { name: '忠言シリーズ', value: '無学の塔[スメール]', inline: true},
		        { name: '公平シリーズ', value: '蒼白の遺栄[フォンテーヌ]', inline: true}
          )
          .setTimestamp()

const ka = new EmbedBuilder()
          .setColor([255,255,0])
	        .setTitle('火曜日天賦素材')
          .addFields(
            { name: '\u200B', value: '\u200B'},
		        { name: '抗争シリーズ', value: '忘却の峡谷[モンド]', inline: true},
		        { name: '勤労シリーズ', value: '太山府[璃月]', inline: true},
		        { name: '風雅シリーズ', value: '菫色ノ庭[稲妻]', inline: true},
          )
          .addFields(
            { name: '創意シリーズ', value: '無学の塔[スメール]', inline: true},
		        { name: '正義シリーズ', value: '蒼白の遺栄[フォンテーヌ]', inline: true}
          )
          .setTimestamp()

const sui = new EmbedBuilder()
          .setColor([255,255,0])
	        .setTitle('水曜日天賦素材')
          .addFields(
            { name: '\u200B', value: '\u200B'},
		        { name: '詩文シリーズ', value: '忘却の峡谷[モンド]', inline: true},
		        { name: '黄金シリーズ', value: '太山府[璃月]', inline: true},
		        { name: '天光シリーズ', value: '菫色ノ庭[稲妻]', inline: true},
          )
          .addFields(
            { name: '篤行シリーズ', value: '無学の塔[スメール]', inline: true},
		        { name: '秩序シリーズ', value: '蒼白の遺栄[フォンテーヌ]', inline: true}
          )
          .setTimestamp()

const moku = new EmbedBuilder()
          .setColor([255,255,0])
	        .setTitle('木曜日天賦素材')
          .addFields(
            { name: '\u200B', value: '\u200B'},
		        { name: '自由シリーズ', value: '忘却の峡谷[モンド]', inline: true},
		        { name: '栄光シリーズ', value: '太山府[璃月]', inline: true},
		        { name: '浮世シリーズ', value: '菫色ノ庭[稲妻]', inline: true},
          )
          .addFields(
            { name: '忠言シリーズ', value: '無学の塔[スメール]', inline: true},
		        { name: '公平シリーズ', value: '蒼白の遺栄[フォンテーヌ]', inline: true}
          )
          .setTimestamp()

const kin = new EmbedBuilder()
          .setColor([255,255,0])
	        .setTitle('金曜日天賦素材')
          .addFields(
            { name: '\u200B', value: '\u200B'},
		        { name: '抗争シリーズ', value: '忘却の峡谷[モンド]', inline: true},
		        { name: '勤労シリーズ', value: '太山府[璃月]', inline: true},
		        { name: '風雅シリーズ', value: '菫色ノ庭[稲妻]', inline: true},
          )
          .addFields(
            { name: '創意シリーズ', value: '無学の塔[スメール]', inline: true},
		        { name: '正義シリーズ', value: '蒼白の遺栄[フォンテーヌ]', inline: true}
          )
          .setTimestamp()

const doy = new EmbedBuilder()
          .setColor([255,255,0])
	        .setTitle('土曜日天賦素材')
          .addFields(
            { name: '\u200B', value: '\u200B'},
		        { name: '詩文シリーズ', value: '忘却の峡谷[モンド]', inline: true},
		        { name: '黄金シリーズ', value: '太山府[璃月]', inline: true},
		        { name: '天光シリーズ', value: '菫色ノ庭[稲妻]', inline: true},
          )
          .addFields(
            { name: '篤行シリーズ', value: '無学の塔[スメール]', inline: true},
		        { name: '秩序シリーズ', value: '蒼白の遺栄[フォンテーヌ]', inline: true}
          )
          .setTimestamp()



//const chs = client.channels.cache.get('1226202848560418938');

cron.schedule('0 0 * * 0', () => {
     console.log('日曜日')
     client.channels.cache.get('1226202848560418938').send('日曜日の天賦素材です！');
     client.channels.cache.get('1226202848560418938').send({ embeds: [sun1] });
     client.channels.cache.get('1226202848560418938').send({ embeds: [sun2] });
     client.channels.cache.get('1226202848560418938').send({ embeds: [sun3] });
     client.channels.cache.get('1226202848560418938').send({ embeds: [sun4] });
     client.channels.cache.get('1226202848560418938').send({ embeds: [sun5] });
 }, {
   scheduled: true,
   timezone: "Asia/Tokyo"
 });



cron.schedule('0 0 * * 1', () => {
     console.log('月曜日')
     client.channels.cache.get('1226202848560418938').send('月曜日の天賦素材です！');
     client.channels.cache.get('1226202848560418938').send({ embeds: [mon] });
 }, {
   scheduled: true,
   timezone: "Asia/Tokyo"
 });

cron.schedule('0 0 * * 2', () => {
     console.log('火曜日')
     client.channels.cache.get('1226202848560418938').send('火曜日の天賦素材です！');
     client.channels.cache.get('1226202848560418938').send({ embeds: [ka] });
 }, {
   scheduled: true,
   timezone: "Asia/Tokyo"
 });

cron.schedule('0 0 * * 3', () => {
     console.log('水曜日')
     client.channels.cache.get('1226202848560418938').send('水曜日の天賦素材です！');
     client.channels.cache.get('1226202848560418938').send({ embeds: [sui] });
 }, {
   scheduled: true,
   timezone: "Asia/Tokyo"
 });

cron.schedule('0 0 * * 4', () => {
     console.log('木曜日')
     client.channels.cache.get('1226202848560418938').send('木曜日の天賦素材です！');
     client.channels.cache.get('1226202848560418938').send({ embeds: [moku] });
 }, {
   scheduled: true,
   timezone: "Asia/Tokyo" 
 });

cron.schedule('0 0 * * 5', () => {
     console.log('金曜日')
     client.channels.cache.get('1226202848560418938').send('金曜日の天賦素材です！');
     client.channels.cache.get('1226202848560418938').send({ embeds: [kin] });
 }, {
   scheduled: true,
   timezone: "Asia/Tokyo"
 });

cron.schedule('0 0 * * 6', () => {
     console.log('土曜日')
     client.channels.cache.get('1226202848560418938').send('土曜日の天賦素材です！');
     client.channels.cache.get('1226202848560418938').send({ embeds: [doy] });
 }, {
   scheduled: true,
   timezone: "Asia/Tokyo"
 });

require('./deploy-commands.js');

client.login(token); 