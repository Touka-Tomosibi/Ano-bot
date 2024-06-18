const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource,  AudioPlayerStatus,  StreamType,  entersState, VoiceConnectionStatus }  = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const url = ['https://youtu.be/Txh4DZmcbPk?si=FmvzBTy0ExIrvD94', 'https://youtu.be/89p7DWIqOu8?si=S7A-HRxInJjGf9W_', 'https://youtu.be/r5xaccIl1Ps?si=WO5IYLAZn7TQtIgA', 'https://youtu.be/lyWfZcCs8xw?si=iMUeJmZ6eGrj6njn', 'https://youtu.be/_c1UbhAarFI?si=-tMJUeI2IZauRQr6', 'https://youtu.be/bx7GJUzfH1A?si=uQ5h3SalV8NEEQQu', 'https://youtu.be/2nhB7Mf46xI?si=COtgnJVbiqmBxY1d', 'https://youtu.be/3Yp-oxOGdHA?si=at3tx5eSZsB4g2bW', 'https://youtu.be/3dqIvhv0MRY?si=CZwGtnx6qOFK7g7E', 'https://youtu.be/8P8VknpWwC8?si=8aQy6Pe7G-nAR8Rq', 'https://youtu.be/NQ-U3udExnA?si=d7ZQmrnuTxTg757l', 'https://youtu.be/wgGtjhG7uiA?si=U7x3nRg_RxAzrUCu', 'https://youtu.be/5XcRbKUKSdY?si=SwvTlHKBEYwSPOtY', 'https://youtu.be/O9g1OyshIX4?si=TsbXr1i5WQ1nq8XT'];
const sn = ['そして夜と灯る by MIMI', 'カラバコにアイ by MIMI', 'SorrowChat by MIMI', '世界秩序と六等星 by Guiano', '晴れた先へ by Hamina', '雲海 by Hamina', '解けない夏 by Apu3ra', 'スーパーヒーロー by Guiano', 'シャナ by Guiano', '眠り姫 by Guiano', '雁首、揃えてご機嫌よう by 卯花ロク', '怨むよ、レイトサマー by 卯花ロク', '踊れオーケストラ by YASUHIRO(康寛)', '空想フォレスト by じん']
//, ''
var stream;
var resource;
var connection;
var player;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('emusic')
		.setDescription('ランダムに無限に音楽を再生します'),
	async execute(interaction) {

        const channel = interaction.member.voice.channel;
        if (!channel) return await interaction.reply('ボイスチャンネルに入室してください。');
        

        await interaction.reply(`Join`);
    
    
		    connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

    
        for (;;) {
          
        var r = Math.floor(Math.random() * url.length);
          
        stream = ytdl(ytdl.getURLVideoID(url[r]), {
           filter: format => format.audioCodec === 'opus' && format.container === 'webm',
           quality: 'highest', 
           highWaterMark: 32 * 1024 * 1024,
      　});
                 
       resource = createAudioResource(stream, {
            inputType: StreamType.WebmOpus,
            inlineVolume: true,
       });
       resource.volume.setVolume(0.06);
    
       interaction.client.channels.cache.get('1248508976354693182').send(`${sn[r]}`);
      　console.log(sn[r]);
       //await interaction.followUp(``);
          //1248508976354693182
      
    　　player = createAudioPlayer();
     
       player.play(resource);
       connection.subscribe(player);
    
    　　await entersState(player,AudioPlayerStatus.Playing, 10 * 1000);
       await entersState(player,AudioPlayerStatus.Idle, 24 * 60 * 60 * 1000);
      }
      }
};