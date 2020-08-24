const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    
})


client.on('message', message =>{
    if (message.content === '!m') {
        // Your invokation here, for example your switch/case hook for some command (i.e. '!muteall')
        // Check if user is in a voice channel:
        if (message.member.voice.channel) {
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            for (const [memberID, member] of channel.members) {
            // I added the following if statement to mute everyone but the invoker:
            // if (member != message.member)
        
            // This single line however, nested inside the for loop, should mute everyone in the channel:
            member.voice.setMute(true);
            }
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
    if (message.content === '!sm'){
        // Your invokation here, for example your switch/case hook for some command (i.e. '!muteall')
        // Check if user is in a voice channel:
        if (message.member.voice.channel) {
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            for (const [memberID, member] of channel.members) {
                // I added the following if statement to mute everyone but the invoker:
                // if (member != message.member)
            
                // This single line however, nested inside the for loop, should umute everyone in the channel:
                member.voice.setMute(false);
            }
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
    if (message.content.includes('Visio')  || message.content.includes('visio')){
        message.reply('Impara a produrre musica: https://www.federicovisioli.com/');
    }
    if (message.content === 'Ion' || message.content === 'ion'){
        message.reply('E\' mio padre');
    }
    if (message.content === 'Alex' || message.content === 'alex'){
        message.reply('Ti spezzo in due');
    }
    
})


client.login(process.env.BOT_TOKEN);
