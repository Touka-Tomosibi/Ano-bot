const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource,  AudioPlayerStatus,  StreamType,  entersState, VoiceConnectionStatus }  = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const url = ['https://youtu.be/Txh4DZmcbPk?si=FmvzBTy0ExIrvD94', 'https://youtu.be/89p7DWIqOu8?si=S7A-HRxInJjGf9W_', 'https://youtu.be/r5xaccIl1Ps?si=WO5IYLAZn7TQtIgA', 'https://youtu.be/lyWfZcCs8xw?si=iMUeJmZ6eGrj6njn', 'https://youtu.be/_c1UbhAarFI?si=-tMJUeI2IZauRQr6', 'https://youtu.be/bx7GJUzfH1A?si=uQ5h3SalV8NEEQQu', 'https://youtu.be/2nhB7Mf46xI?si=COtgnJVbiqmBxY1d', 'https://youtu.be/3Yp-oxOGdHA?si=at3tx5eSZsB4g2bW', 'https://youtu.be/3dqIvhv0MRY?si=CZwGtnx6qOFK7g7E', 'https://youtu.be/8P8VknpWwC8?si=8aQy6Pe7G-nAR8Rq', 'https://youtu.be/NQ-U3udExnA?si=d7ZQmrnuTxTg757l', 'https://youtu.be/wgGtjhG7uiA?si=U7x3nRg_RxAzrUCu', 'https://youtu.be/5XcRbKUKSdY?si=SwvTlHKBEYwSPOtY', 'https://youtu.be/O9g1OyshIX4?si=TsbXr1i5WQ1nq8XT', 'https://youtu.be/RQYdnwgKGvY?si=dibXBWp3gHqbCROP', 'https://youtu.be/WzotRcUQZwI?si=G-6MhzHZYe9okUsn', 'https://youtu.be/VU7k7hMTHRA?si=rQwZnLx7Uf_rJaka', 'https://youtu.be/RqdF_rogvSc?si=QRsoUWx3Yt-i-CYj', 'https://youtu.be/NgPB8_Dy0jQ?si=Om31cJ7zLsPdUtrX', 'https://youtu.be/0KK5vQlCVYo?si=oaHeWmBXHrN5p5jR', 'https://youtu.be/xYkwGzfP3_M?si=IIxejEdKVsELq7is', 'https://youtu.be/WS8YotpJzAY?si=N-l5C0Zz8uOlpiM-', 'https://youtu.be/iCCCecM65DU?si=fYodRe11npUgGpqW', 'https://youtu.be/G_JfKOjwzwo?si=W2DmprKL3fwFZhLq', 'https://youtu.be/uZbkf8Tbft4?si=0rOMquW6Tt-TDxeQ', 'https://youtu.be/6z-rlX6LuFE?si=FE5Ak9XAWdP9jppL', 'https://youtu.be/HRL5Cp_mPeo?si=vaizsZTRHSRMDL9X', 'https://youtu.be/juJkNKodgdE?si=EprG2YfFlwTIIqoa', 'https://youtu.be/7x95tWw9kc0?si=olIF-svRvpC-nEzH', 'https://youtu.be/7m8OSE7n-jY?si=RL1tPLYCyJy61sBS', 'https://youtu.be/Nizm-_h1VG4?si=sBoWnW_WeN2BIlXv'];
const sn = ['そして夜と灯る by MIMI', 'カラバコにアイ by MIMI', 'SorrowChat by MIMI', '世界秩序と六等星 by Guiano', '晴れた先へ by Hamina', '雲海 by Hamina', '解けない夏 by Apu3ra', 'スーパーヒーロー by Guiano', 'シャナ by Guiano', '眠り姫 by Guiano', '雁首、揃えてご機嫌よう by 卯花ロク', '怨むよ、レイトサマー by 卯花ロク', '踊れオーケストラ by YASUHIRO(康寛)', '空想フォレスト by じん','DISK by saniyuri', '殺されている by Guiano', '生きる証 by Guiano', '辿る深海、俄雨 by Guiano', '夢中弱者 by Seeka', '雨き声残響 by Orangestar', 'more by saniyuri', 'pierce by saniyuri', 'センダンライフ', 'Through Patches of Violet by Mili', 'Poison by BULBA', 'Funk Assembly by PSYQUI', '堕天(DATEN) by Creepy Nuts', 'INSANE by Black Gryph0n & Baasik', 'カミイロアワセ by ダンガンロンパ3-The End of 希望ヶ峰学園-絶望編 OPテーマ', '翼の生えた希望 by 崩壊：スターレイル', '傷つく誰かの心を守ることができたなら by 崩壊：スターレイル']
//, ''
var stream;
var resource;
var connection;
var player;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('emusic')
		.setDescription('無限に音楽を再生します'),
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
       resource.volume.setVolume(0.1);
    
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