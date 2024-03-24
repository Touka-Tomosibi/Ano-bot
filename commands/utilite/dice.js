const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daisu')
		.setDescription('6面ダイスを振ります'),
	async execute(interaction) {

        const random = Math.floor( Math.random() * 6) + 1;

		await interaction.reply(`${random}`);
	},
};