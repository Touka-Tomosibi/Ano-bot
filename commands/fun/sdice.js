const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
  
		.setName('sdice') //コマンド名
    
		.setDescription('面が決められるダイス振ります') //コマンド説明
  
    .addNumberOption(option =>
			option
				.setName('select')
				.setDescription('面の数')
				.setRequired(true)),
    
	async execute(interaction) {
    
    const num = interaction.options.getNumber('select');
  
    var dice = Math.floor(Math.random() * num) +1;
    
		await interaction.reply(`${dice}`); //送信される内容
    
	},
};
