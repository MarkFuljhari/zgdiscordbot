const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!zg"

client.on('ready',() => {
  console.log("I\'m Online! Ready to launch!");
  client.user.setActivity('!zg help', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : '!zg help}`))
    .catch(console.error);
})

client.on('message', message => {
  if (message.author === client.user) return;
  	if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send({embed: { "plainText": "", "title": "Bot Support", "description": "Commands: \n • !zg help - Shows this message \n • !zg servers - Displays clan & partnered servers \n • !zg about - Shows bot information ", "color": 53380 }});
  	}
    if (message.content.startsWith(prefix + 'servers')) {
  		message.channel.send({embed: { "plainText": "", "title": "Servers", "description": "Clan: \n • TeamCo7 Clan \n Invite: https://discord.gg/TW9yC4V \n • FS| Softwares \n Invite: https://discord.gg/j39xBQa \n \n Communities: \n • GoodBoy00's Lounge \n Invite: https://discord.gg/8yyfzYY \n • PrinceRaj 592 \n Invite: https://discord.gg/rGu7F39", "color": 53380 }});
  	}
    if (message.content.startsWith(prefix + 'about')) {
    message.channel.send({embed: { "plainText": "", "title": "About TeamCo7 Clan Bot", "description": "Hi! I\'m a bot that\'s serving: \n • TeamCo7 Clan members \n • Allied clans or communities", "color": 53380 }});
    }

});
//
client.login(process.env.BOT_TOKEN);
