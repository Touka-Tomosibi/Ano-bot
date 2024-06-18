const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('hosii')
		.setDescription('5000兆円欲しいのフォントで画像を作れます')
		.addStringOption(option =>
			option.setName('top')
			      .setRequired(true)
			      .setDescription('上側'))
		.addStringOption(option =>
			option.setName('bottom')
			      .setRequired(true)
		          .setDescription('下側')),
	async execute(interaction) {  

    const top = interaction.options.getString('top');
	const top2 = String(top);
	const bottom = interaction.options.getString('bottom');
	const bottom2 = String(bottom);

	const okane = new EmbedBuilder()
	.setColor([255,255,0])
	.setImage(`https://gsapi.cbrx.io/image?top=${encodeURIComponent(top2)}&bottom=${encodeURIComponent(bottom2)}`)
	.setTimestamp()
    .setFooter({text : 'Powered by 5000choyen-api'})

	await interaction.reply( { embeds: [okane] } );
	},
};