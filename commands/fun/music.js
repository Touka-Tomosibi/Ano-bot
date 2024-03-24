const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource,  AudioPlayerStatus,  StreamType,  entersState, VoiceConnectionStatus }  = require('@discordjs/voice');
const ytdl = require('ytdl-core');
var url = [];
var a = 'one';
var stream;
var resource;
var connection;
var player;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('music')
		.setDescription('音楽を再生します')
        .addStringOption(option =>
            option.setName('url')
                .setDescription('YouTubeのURLを入力してください')
                .setRequired(true)
            ),
	async execute(interaction) {

        const channel = interaction.member.voice.channel;
        if (!channel) return await interaction.reply('ボイスチャンネルに入室してください。');

        if (a == 'two') {

            console.log('two');

            if (connection.state.status == VoiceConnectionStatus.Disconnected) {
                console.log('Dis');
                    
                a = 'one';
                url = [];

            };
        }

        var url2 = interaction.options.getString('url');

        if (!url2.startsWith('https://youtu.be' || 'https://www.youtube' || 'https://m.youtube.com' || 'https://music.youtube'))  { 
            await interaction.reply('YouTubeのURLを送信してください');
            return
        }
       
        url.push(`${interaction.options.getString('url')}`)

		    connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

        if (a == 'one') {
            await interaction.reply(`Join & Added\n${url2}`);
        for (;;) {
            a = 'two';
            if (url.length != 0) {

                stream = ytdl(ytdl.getURLVideoID(url[0]), {
                    filter: format => format.audioCodec === 'opus' && format.container === 'webm',
                    quality: 'highest',
                    highWaterMark: 32 * 1024 * 1024,
                });
                 
                resource = createAudioResource(stream, {
                    inputType: StreamType.WebmOpus,
                    inlineVolume: true,
                });
                resource.volume.setVolume(0.06);

       
                player = createAudioPlayer();
     
                player.play(resource);
                connection.subscribe(player);

		
                await entersState(player,AudioPlayerStatus.Playing, 10 * 1000);
                await entersState(player,AudioPlayerStatus.Idle, 24 * 60 * 60 * 1000);
                url.shift();
            } else {
                break
            }
        }

        await interaction.followUp('END');
        a ='one';
        connection.destroy();
	} else {
        await interaction.reply(`Added\n${url2}`);
        console.log(url);
    }
}
};
        