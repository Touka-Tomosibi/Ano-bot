const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        
        if (message.content.includes('コード教えて') && message.content.includes('<@1145175050564145162>')) {     

            await message.channel.send('[Glitch](https://glitch.com/edit/#!/remix/discordjs-v14-node16-templates-ver2)\n[Github](https://github.com/Touka-Tomosibi/Discordjs-v14-Templat/tree/glitch)');//送信するメッセージ
            
         }
	},
};