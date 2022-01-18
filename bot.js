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
 
    //// ENTERTAINMENT COMMANDS: ////
 
// POKE CMD
if (msg.content.startsWith(prefix + 'poke')){
let member = msg.mentions.members.first();
msg.channel.send(`${member} got poked by ${msg.author}`);
}
 
// HI CMD
if (msg.content.startsWith(prefix + 'hi')){
msg.channel.send('Hey wassup?');
}
 
// HAND WAVE CMD
if (msg.content.startsWith(prefix + 'wave')){
let member = msg.mentions.members.first();
msg.channel.send(`${member} , ${msg.author} waved at you.`);
}

  // WEED CMD
  if (msg.content.startsWith(prefix + 'weed')){
  return msg.channel.send("**Smoking!**").then(async msg => {
    setTimeout(() => {
        msg.edit('🚬');
    }, 500);
    setTimeout(() => {
        msg.edit('🚬 ☁ ');
    }, 700);
    setTimeout(() => {
        msg.edit('🚬 ☁☁ ');
    }, 900);
    setTimeout(() => {
        msg.edit('🚬 ☁☁☁ ');
    }, 1000);
    setTimeout(() => {
        msg.edit('🚬 ☁☁☁');
    }, 1100);
    setTimeout(() => {
        msg.edit('🚬 ☁☁');
    }, 1200);
    setTimeout(() => {
        msg.edit('🚬 ☁');
    }, 1300);
    setTimeout(() => {
        msg.edit(`**Finished smoking!**`);
    }, 1500);
    setTimeout(() => {
        msg.delete(`**Finished smoking!**`);
    }, 6000);
  });
}
 
  // DOG CMD
if (msg.content.startsWith(prefix +'dog')){
  let {
    body
} = await superagent
    .get(`https://random.dog/woof.json`);
const dogembed = new Discord.RichEmbed()
    .setTitle("Aww... Doggie!")
    .setColor("RANDOM")
    .setImage(body.url)
msg.channel.send(dogembed);
}
 
// CAT CMD
if (msg.content.startsWith(prefix + 'cat')){
  let {
    body
} = await superagent
    .get(`http://aws.random.cat/meow`);
const catembed = new Discord.RichEmbed()
    .setTitle('Aww... Kitty!')
    .setColor("RANDOM")
    .setImage(body.file)
msg.channel.send(catembed);
}
 
// MEME CMD
if (msg.content.startsWith(prefix + 'meme')){
    let {
        body
    } = await superagent
        .get(`https://api-to.get-a.life/meme`);
    const memembed = new Discord.RichEmbed()
        .setTitle("Life is a meme !")
        .setColor("RANDOM")
        .setImage(body.url)
    msg.channel.send(memembed);
}
  
  // SLOT MACHINE CMD
if (msg.content.startsWith(prefix + 'slots')){
  if (!msg.guild.member(client.user).hasPermission("SEND_MESSAGES")) return msg.author.send('I don\'t have permission to Send Messages. Please enable send messages for my role!');
 
    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = msg.author.displayName;
    let aicon = msg.author.displayAvatarURL;
 
    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        msg.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        msg.channel.send(embed);
    }
}
 
// 8BALL CMD
if (msg.content.startsWith(prefix + '8ball')){
  if (!args[2]) return msg.reply("please ask a full question!");
  let replies = ["Why ask me that? :laughing:","Yes, Certainly :8ball:", "No, Never :8ball:", "Please ask again :8ball:"]
  let result = Math.floor((Math.random() * replies.length));
 
  let question = args.slice().join(" ");
 
  let embedz = new Discord.RichEmbed()
      .setAuthor(msg.author.username + " asks: " + question)
      .setColor("#D3D3D3")
      .addField("Answer", "Asked by " + msg.author.tag + "\nAnswer: " + replies[result] + "")
 
  msg.channel.send(embedz)
}
  

});
//
client.login(process.env.BOT_TOKEN);
