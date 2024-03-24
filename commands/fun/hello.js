const { SlashCommandBuilder, Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('挨拶をするよ')
        .addStringOption(option =>
			option.setName('language')
				.setDescription('language-言語')
				.setRequired(true)
				.addChoices(
					{ name: 'ENG', value: 'en' },
					{ name: 'JP', value: 'jp' },
				)),
    async execute(interaction) {
        const lun = interaction.options.getString('language');

        if (lun == 'en') {
            await interaction.reply(`Hello！！<@${interaction.user.id}>！`);
        } else if (lun == 'jp') {
            await interaction.reply(`<@${interaction.user.id}>さん！こんにちは！！`);
        }
    },
};