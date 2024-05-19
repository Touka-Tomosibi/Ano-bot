const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const date = new Date(2023,9,16);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('helpを表示します'),
	async execute(interaction) {
    
    const user = await interaction.client.users.fetch('1145175050564145162');
    
    const embed = new EmbedBuilder()
	    .setColor([255,255,0])
	    .setTitle('あのbot-Help')
      .setThumbnail(user.displayAvatarURL({size: 1024}))
	    .addFields(
		    { name: '\u200B', value: '\u200B'},
		    { name: '/でコマンドの使用ができます', value: '\u200B' },
		    { name: '`/help`', value: '\u200B' },
		    { name: '`/ping`', value: '\u200B' },
		  )
	    .setTimestamp(date)
    
		await interaction.reply({ embeds: [embed] });
	},
};