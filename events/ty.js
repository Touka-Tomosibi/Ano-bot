const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        
        if (message.content == '愛してるよあのbot') { //反応するメッセージ(完全一致)     

            await message.reply('ありがとう！');//送信するメッセージ
            
         }
	},
};