const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel }  = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('切断します'),
	async execute(interaction) {
        
        
    const channel = interaction.member.voice.channel; 
		const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

        connection.disconnect();

        await interaction.reply('切断しました')
	},
};