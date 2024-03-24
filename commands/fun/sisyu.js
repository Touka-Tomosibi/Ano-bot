const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const ano = [`非常食が1匹...`, `引き換えコードHELLO2440を入力して1億ジェムを受け取ろう！`, `眠れるまで、私とお話していきませんか？＼ｽﾌﾟｰﾝ／`, `鬼電ふぃーばーたいむ`, `私に良心が無かったら鬼電してましたね`, `ちょっと\n表出ましょうか`, `タルタルは私が人気にしました`, `やったー！ありがとうママァﾝ`, `その未来、消し去ります`, `自販機、走ります`];




module.exports = {
	data: new SlashCommandBuilder()
		.setName('anos')
		.setDescription('あの詩集'),
	async execute(interaction) {
        const random = Math.floor(Math.random() * ano.length);

        const anosi = new EmbedBuilder()
	.setColor([255,255,0])
	.setTitle('あの詩集')
	.addFields(
		{name: ano[random], value: '\u200B'},
    )
	.setTimestamp();

		await interaction.reply({embeds : [anosi]});
		//
	},
};