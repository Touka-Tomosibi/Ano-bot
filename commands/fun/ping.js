const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('遅延測定'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: 'うーん...', fetchReply: true });
		interaction.editReply(`ポン！！ ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
	},
};