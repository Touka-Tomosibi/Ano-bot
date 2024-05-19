const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`${client.user.tag}でログイン！`);
    client.channels.cache.get('1226560608384843967').send('ログイン！');
	},
};