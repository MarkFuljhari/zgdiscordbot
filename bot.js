const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!zg "

client.on('ready',() => {
 console.log('Discord Bot is ready to operate! You can test the commands.');
 console.log(`Discord Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guild (s).`);
 console.log('Activation only allowed with permission of Administrators or Developers!');
 client.user.setActivity('!zg help | zg-gaming.co', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : '!zg help | zg-gaming.co'}`))
    .catch(console.error);
})

client.on('message', async msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    var argresult = args.join(' ');

client.on('message', message => {
  if (message.author === client.user) return;
 
// COMMANDS
   	if (msg.content.startsWith(prefix + 'help')) {
  		msg.channel.send({embed: { "plainText": "", "title": "Bot Support | Zero Gravity Gaming", "description": "Commands: \n • !zg help - Shows this message \n • !zg servers - Displays zG| Servers \n • !zg about - About zG| and bot ", "color": 53380 }});
   	}
 
    if (msg.content.startsWith(prefix + 'servers')) {
  		message.channel.send({embed: { "plainText": "", "title": "zG| Global Servers", "description": "\n Call of Duty 4: Modern Warfare Servers: \n • zG| Sniper Online Zero Gravity \n :flag_us: `74.91.127.206:28961` \n • zG| ProMod 2.20 // Zero Gravity \n :flag_us: `74.91.127.206:28960` \n • zG| ProMod 2.16 // Zero Gravity \n :flag_us: `74.91.127.206:28963` \n • zG| CoDJumper // Zero Gravity \n :flag_us: `74.91.127.206:28964` \n \n Teamspeak 3: \n :flag_us: `	74.91.127.206:9987`", "color": 53380 }});
   	}
 
    if (msg.content.startsWith(prefix + 'about')) {
    msg.channel.send({embed: { "plainText": "", "title": "About zG| & Discord bot", "description": "Zero Gravity Gaming was founded by zG| NeRy & zG| Thief in 2013 \n Becoming one of the most famous clans in COD4:MW history \n Currently zG|NeRy is not at power \n zG|REY305 is now the Head-Leader of zG. \n Website: https://zg-gaming.co/", "color": 53380 }});
    }

});
//
client.login(process.env.BOT_TOKEN);
